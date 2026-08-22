'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { hadisData, Hadis, HadisStatus } from '@/data/hadis';
import { db, ActivityRecord } from '@/lib/db';

export type ActivityItem = ActivityRecord;

interface ProgressContextType {
  statuses: Record<number, HadisStatus>;
  updateStatus: (hadisId: number, status: HadisStatus) => void;
  lastOpenedHadisId: number;
  updateLastOpened: (hadisId: number) => void;
  activities: ActivityItem[];
  learningTimeMinutes: number;
  addLearningSeconds: (seconds: number, hadisId?: number) => void;
  streakDays: number;
  getHadisList: () => Hadis[];
  getHadisById: (id: number) => Hadis | undefined;
  getLastOpenedHadis: () => Hadis;
  resetAllProgress: () => void;
}

const STORAGE_KEY_STATUSES = 'dengarbain_hadis_statuses_v2';
const STORAGE_KEY_LAST_OPENED = 'dengarbain_last_opened_id_v2';
const STORAGE_KEY_ACTIVITIES = 'dengarbain_activities_v2';
const STORAGE_KEY_LEARNING_SECONDS = 'dengarbain_learning_seconds_v2';
const STORAGE_KEY_ACTIVE_DATES = 'dengarbain_active_dates_v2';

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function calculateStreak(dates: string[]): number {
  if (!dates || dates.length === 0) return 0;
  
  const sorted = Array.from(new Set(dates)).sort().reverse();
  const today = getTodayString();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, '0')}-${String(yesterdayDate.getDate()).padStart(2, '0')}`;

  let streak = 0;
  let checkDate = new Date();

  // If active today or yesterday, count backwards
  if (sorted.includes(today) || sorted.includes(yesterday)) {
    if (!sorted.includes(today)) {
      checkDate = yesterdayDate;
    }
    
    while (true) {
      const dateStr = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`;
      if (sorted.includes(dateStr)) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
  }

  return Math.max(1, streak);
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [statuses, setStatuses] = useState<Record<number, HadisStatus>>({});
  const [lastOpenedHadisId, setLastOpenedHadisId] = useState<number>(1);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [learningSeconds, setLearningSeconds] = useState<number>(0);
  const [streakDays, setStreakDays] = useState<number>(1);

  // Dual Storage Initializer: Load immediately from LocalStorage, verify & sync with IndexedDB in background
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadDualStorage = async () => {
      try {
        let currentStatuses: Record<number, HadisStatus> | null = null;
        let currentLastOpened: number | null = null;
        let currentActivities: ActivityItem[] | null = null;
        let currentSeconds: number | null = null;
        let currentDates: string[] | null = null;

        // 1. Fast initial load from LocalStorage
        if (window.localStorage && typeof window.localStorage.getItem === 'function') {
          const lsStatuses = window.localStorage.getItem(STORAGE_KEY_STATUSES);
          if (lsStatuses) currentStatuses = JSON.parse(lsStatuses);

          const lsLastOpened = window.localStorage.getItem(STORAGE_KEY_LAST_OPENED);
          if (lsLastOpened) currentLastOpened = Number(lsLastOpened);

          const lsActs = window.localStorage.getItem(STORAGE_KEY_ACTIVITIES);
          if (lsActs) currentActivities = JSON.parse(lsActs);

          const lsSeconds = window.localStorage.getItem(STORAGE_KEY_LEARNING_SECONDS);
          if (lsSeconds) currentSeconds = Number(lsSeconds);

          const lsDates = window.localStorage.getItem(STORAGE_KEY_ACTIVE_DATES);
          if (lsDates) currentDates = JSON.parse(lsDates);
        }

        // 2. Check IndexedDB as durable source / backup
        const idbStatuses = await db.getAllHadisStatuses();
        const idbActivities = await db.getActivities();
        const idbLastOpened = await db.getAppState<number>(STORAGE_KEY_LAST_OPENED);
        const idbSeconds = await db.getAppState<number>(STORAGE_KEY_LEARNING_SECONDS);
        const idbDates = await db.getAppState<string[]>(STORAGE_KEY_ACTIVE_DATES);

        // --- Merge Statuses ---
        if (!currentStatuses || Object.keys(currentStatuses).length === 0) {
          if (Object.keys(idbStatuses).length > 0) {
            currentStatuses = idbStatuses;
          } else {
            const initialMap: Record<number, HadisStatus> = {};
            hadisData.forEach((h) => {
              initialMap[h.id] = h.status;
            });
            currentStatuses = initialMap;
          }
        }
        setStatuses(currentStatuses);
        db.bulkSaveHadisStatus(currentStatuses);
        if (window.localStorage && typeof window.localStorage.setItem === 'function') {
          window.localStorage.setItem(STORAGE_KEY_STATUSES, JSON.stringify(currentStatuses));
        }

        // --- Merge Last Opened ---
        if (!currentLastOpened && idbLastOpened) {
          currentLastOpened = idbLastOpened;
        }
        if (currentLastOpened) {
          setLastOpenedHadisId(currentLastOpened);
          db.setAppState(STORAGE_KEY_LAST_OPENED, currentLastOpened);
        }

        // --- Merge Activities ---
        if ((!currentActivities || currentActivities.length === 0) && idbActivities.length > 0) {
          currentActivities = idbActivities;
        }
        if (currentActivities) {
          setActivities(currentActivities);
          db.saveActivities(currentActivities);
          if (window.localStorage && typeof window.localStorage.setItem === 'function') {
            window.localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(currentActivities));
          }
        }

        // --- Merge Learning Time ---
        if ((currentSeconds === null || currentSeconds === 0) && idbSeconds && idbSeconds > 0) {
          currentSeconds = idbSeconds;
        }
        if (currentSeconds !== null) {
          setLearningSeconds(currentSeconds);
          db.setAppState(STORAGE_KEY_LEARNING_SECONDS, currentSeconds);
        }

        // --- Merge Daily Streak Tracking ---
        const today = getTodayString();
        let datesList: string[] = currentDates || idbDates || [];
        if (!datesList.includes(today)) {
          datesList = [...datesList, today];
        }
        setStreakDays(calculateStreak(datesList));
        db.setAppState(STORAGE_KEY_ACTIVE_DATES, datesList);
        if (window.localStorage && typeof window.localStorage.setItem === 'function') {
          window.localStorage.setItem(STORAGE_KEY_ACTIVE_DATES, JSON.stringify(datesList));
        }

      } catch (err) {
        console.error('Failed to initialize Dual Storage:', err);
      }
    };

    loadDualStorage();
  }, []);

  // Update status function (Dual Write: LocalStorage + IndexedDB)
  const updateStatus = (hadisId: number, status: HadisStatus) => {
    setStatuses((prev) => {
      const updated = { ...prev, [hadisId]: status };
      try {
        if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
          window.localStorage.setItem(STORAGE_KEY_STATUSES, JSON.stringify(updated));
        }
        // Save to IndexedDB
        db.saveHadisStatus(hadisId, status);
      } catch (err) {
        console.error('Failed to save status:', err);
      }
      return updated;
    });

    // Record activity log
    const targetHadis = hadisData.find((h) => h.id === hadisId);
    if (targetHadis) {
      const statusLabelMap: Record<HadisStatus, string> = {
        hafal: 'Selesai dihafal',
        sedang: 'Sedang dipelajari',
        belum: 'Status diubah ke Belum',
      };

      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const newActivity: ActivityItem = {
        id: `act-${Date.now()}`,
        hadisId,
        title: `Hadis ${hadisId} : ${targetHadis.judul}`,
        desc: statusLabelMap[status],
        timestamp: `Hari ini, ${timeStr}`,
      };

      setActivities((prev) => {
        const updatedList = [newActivity, ...prev.slice(0, 14)];
        try {
          if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
            window.localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(updatedList));
          }
          // Save to IndexedDB
          db.saveActivity(newActivity);
        } catch (err) {
          console.error('Failed to save activities:', err);
        }
        return updatedList;
      });
    }
  };

  // Update last opened hadis (Dual Write)
  const updateLastOpened = (hadisId: number) => {
    setLastOpenedHadisId(hadisId);
    try {
      if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
        window.localStorage.setItem(STORAGE_KEY_LAST_OPENED, String(hadisId));
      }
      db.setAppState(STORAGE_KEY_LAST_OPENED, hadisId);
    } catch (err) {
      console.error('Failed to save last opened hadis:', err);
    }
  };

  // Add learning seconds dynamically from Audio Player (Dual Write)
  const addLearningSeconds = (seconds: number, hadisId?: number) => {
    setLearningSeconds((prev) => {
      const updated = prev + seconds;
      try {
        if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
          window.localStorage.setItem(STORAGE_KEY_LEARNING_SECONDS, String(updated));
        }
        db.setAppState(STORAGE_KEY_LEARNING_SECONDS, updated);
      } catch (err) {
        console.error('Failed to save learning time:', err);
      }
      return updated;
    });

    if (hadisId && seconds >= 5) {
      const targetHadis = hadisData.find((h) => h.id === hadisId);
      if (targetHadis) {
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const newActivity: ActivityItem = {
          id: `act-listen-${Date.now()}`,
          hadisId,
          title: `Hadis ${hadisId} : ${targetHadis.judul}`,
          desc: `Didengarkan ${Math.round(seconds)} detik`,
          timestamp: `Hari ini, ${timeStr}`,
        };

        setActivities((prev) => {
          // Avoid duplicate listening activity logs within 1 minute for same hadis
          if (prev.length > 0 && prev[0].hadisId === hadisId && prev[0].desc.startsWith('Didengarkan')) {
            return prev;
          }
          const updatedList = [newActivity, ...prev.slice(0, 14)];
          try {
            if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
              window.localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(updatedList));
            }
            db.saveActivity(newActivity);
          } catch (err) {
            console.error('Failed to save activities:', err);
          }
          return updatedList;
        });
      }
    }
  };

  // Reset all progress completely (Dual Clear: LocalStorage + IndexedDB)
  const resetAllProgress = () => {
    const defaultMap: Record<number, HadisStatus> = {};
    hadisData.forEach((h) => {
      defaultMap[h.id] = 'belum';
    });
    setStatuses(defaultMap);
    setLastOpenedHadisId(1);
    setActivities([]);
    setLearningSeconds(0);
    setStreakDays(1);

    try {
      if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.removeItem === 'function') {
        window.localStorage.removeItem(STORAGE_KEY_STATUSES);
        window.localStorage.removeItem(STORAGE_KEY_LAST_OPENED);
        window.localStorage.removeItem(STORAGE_KEY_ACTIVITIES);
        window.localStorage.removeItem(STORAGE_KEY_LEARNING_SECONDS);
        window.localStorage.removeItem(STORAGE_KEY_ACTIVE_DATES);
      }
      db.clearAllData();
    } catch (err) {
      console.error('Failed to clear dual storage:', err);
    }
  };

  // Helper getters
  const getHadisList = (): Hadis[] => {
    return hadisData.map((h) => ({
      ...h,
      status: statuses[h.id] || 'belum',
    }));
  };

  const getHadisById = (id: number): Hadis | undefined => {
    const original = hadisData.find((h) => h.id === id);
    if (!original) return undefined;
    return {
      ...original,
      status: statuses[id] || 'belum',
    };
  };

  const getLastOpenedHadis = (): Hadis => {
    return getHadisById(lastOpenedHadisId) || getHadisList()[0];
  };

  const learningTimeMinutes = Math.round((learningSeconds / 60) * 10) / 10;

  return (
    <ProgressContext.Provider
      value={{
        statuses,
        updateStatus,
        lastOpenedHadisId,
        updateLastOpened,
        activities,
        learningTimeMinutes,
        addLearningSeconds,
        streakDays,
        getHadisList,
        getHadisById,
        getLastOpenedHadis,
        resetAllProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
