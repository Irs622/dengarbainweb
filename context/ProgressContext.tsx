'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Hadis, HadisStatus, hadisData } from '@/data/hadis';
import { db } from '@/lib/db';

export interface ActivityItem {
  id: string;
  hadisId: number;
  title: string;
  desc: string;
  timestamp: string;
}

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

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY_STATUSES = 'dengarbain_hadis_statuses';
const STORAGE_KEY_LAST_OPENED = 'dengarbain_last_opened';
const STORAGE_KEY_ACTIVITIES = 'dengarbain_activities';
const STORAGE_KEY_LEARNING_SECONDS = 'dengarbain_learning_seconds';
const STORAGE_KEY_ACTIVE_DATES = 'dengarbain_active_dates';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [statuses, setStatuses] = useState<Record<number, HadisStatus>>(() => {
    if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.getItem === 'function') {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY_STATUSES);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved statuses from localStorage:', e);
      }
    }
    const defaultMap: Record<number, HadisStatus> = {};
    hadisData.forEach((h) => {
      defaultMap[h.id] = h.status;
    });
    return defaultMap;
  });

  const [lastOpenedHadisId, setLastOpenedHadisId] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.getItem === 'function') {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY_LAST_OPENED);
        if (saved) return Number(saved);
      } catch (e) {
        console.error('Failed to parse last opened hadis:', e);
      }
    }
    return 1;
  });

  const [activities, setActivities] = useState<ActivityItem[]>(() => {
    if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.getItem === 'function') {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY_ACTIVITIES);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse activities from localStorage:', e);
      }
    }
    return [];
  });

  const [learningSeconds, setLearningSeconds] = useState<number>(() => {
    if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.getItem === 'function') {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY_LEARNING_SECONDS);
        if (saved) return Number(saved);
      } catch (e) {
        console.error('Failed to parse learning seconds:', e);
      }
    }
    return 0;
  });

  const [streakDays, setStreakDays] = useState<number>(1);

  const getTodayString = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const calculateStreak = (dates: string[]): number => {
    if (!dates || dates.length === 0) return 1;
    const sorted = [...new Set(dates)].sort().reverse();
    let streak = 0;
    const now = new Date();

    for (let i = 0; i < sorted.length; i++) {
      const checkDate = new Date(now);
      checkDate.setDate(now.getDate() - i);
      const expectedStr = `${checkDate.getFullYear()}-${String(checkDate.getMonth() + 1).padStart(2, '0')}-${String(checkDate.getDate()).padStart(2, '0')}`;

      if (sorted.includes(expectedStr)) {
        streak++;
      } else {
        if (i === 0) continue;
        break;
      }
    }
    return Math.max(1, streak);
  };

  // Dual Storage Initialization & Sync
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadDualStorage = async () => {
      try {
        const idbStatuses = await db.getAllHadisStatuses();
        const idbActivities = await db.getActivities();
        const idbLastOpened = await db.getAppState<number>(STORAGE_KEY_LAST_OPENED);
        const idbSeconds = await db.getAppState<number>(STORAGE_KEY_LEARNING_SECONDS);
        const idbDates = await db.getAppState<string[]>(STORAGE_KEY_ACTIVE_DATES);

        let currentStatuses: Record<number, HadisStatus> | null = null;
        let currentActivities: ActivityItem[] | null = null;
        let currentLastOpened: number | null = null;
        let currentSeconds: number | null = null;
        let currentDates: string[] | null = null;

        if (window.localStorage && typeof window.localStorage.getItem === 'function') {
          const lsStatuses = window.localStorage.getItem(STORAGE_KEY_STATUSES);
          if (lsStatuses) currentStatuses = JSON.parse(lsStatuses);

          const lsActivities = window.localStorage.getItem(STORAGE_KEY_ACTIVITIES);
          if (lsActivities) currentActivities = JSON.parse(lsActivities);

          const lsLastOpened = window.localStorage.getItem(STORAGE_KEY_LAST_OPENED);
          if (lsLastOpened) currentLastOpened = Number(lsLastOpened);

          const lsSeconds = window.localStorage.getItem(STORAGE_KEY_LEARNING_SECONDS);
          if (lsSeconds) currentSeconds = Number(lsSeconds);

          const lsDates = window.localStorage.getItem(STORAGE_KEY_ACTIVE_DATES);
          if (lsDates) currentDates = JSON.parse(lsDates);
        }

        // Merge Statuses
        const mergedStatuses: Record<number, HadisStatus> = {
          ...idbStatuses,
          ...(currentStatuses || {}),
        };

        if (Object.keys(mergedStatuses).length > 0) {
          setStatuses((prev) => ({ ...prev, ...mergedStatuses }));
          if (window.localStorage && typeof window.localStorage.setItem === 'function') {
            window.localStorage.setItem(STORAGE_KEY_STATUSES, JSON.stringify(mergedStatuses));
          }
          await db.bulkSaveHadisStatus(mergedStatuses);
        }

        // Merge Activities
        const mergedActivities = currentActivities && currentActivities.length > 0 ? currentActivities : idbActivities;
        if (mergedActivities && mergedActivities.length > 0) {
          setActivities(mergedActivities);
          if (window.localStorage && typeof window.localStorage.setItem === 'function') {
            window.localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(mergedActivities));
          }
        }

        // Merge Last Opened
        if (!currentLastOpened && idbLastOpened) {
          currentLastOpened = idbLastOpened;
        }
        if (currentLastOpened) {
          setLastOpenedHadisId(currentLastOpened);
          db.setAppState(STORAGE_KEY_LAST_OPENED, currentLastOpened);
        }

        // Merge Learning Time
        if ((currentSeconds === null || currentSeconds === 0) && idbSeconds && idbSeconds > 0) {
          currentSeconds = idbSeconds;
        }
        if (currentSeconds !== null) {
          setLearningSeconds(currentSeconds);
          db.setAppState(STORAGE_KEY_LEARNING_SECONDS, currentSeconds);
        }

        // Merge Daily Streak Tracking
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
  const updateStatus = useCallback((hadisId: number, status: HadisStatus) => {
    setStatuses((prev) => {
      const updated = { ...prev, [hadisId]: status };
      try {
        if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
          window.localStorage.setItem(STORAGE_KEY_STATUSES, JSON.stringify(updated));
        }
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
          db.saveActivity(newActivity);
        } catch (err) {
          console.error('Failed to save activities:', err);
        }
        return updatedList;
      });
    }
  }, []);

  // Update last opened hadis (Dual Write)
  const updateLastOpened = useCallback((hadisId: number) => {
    setLastOpenedHadisId(hadisId);
    try {
      if (typeof window !== 'undefined' && window.localStorage && typeof window.localStorage.setItem === 'function') {
        window.localStorage.setItem(STORAGE_KEY_LAST_OPENED, String(hadisId));
      }
      db.setAppState(STORAGE_KEY_LAST_OPENED, hadisId);
    } catch (err) {
      console.error('Failed to save last opened hadis:', err);
    }
  }, []);

  // Add learning seconds dynamically from Audio Player (Dual Write)
  const addLearningSeconds = useCallback((seconds: number, hadisId?: number) => {
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
  }, []);

  // Reset all progress completely (Dual Clear: LocalStorage + IndexedDB)
  const resetAllProgress = useCallback(() => {
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
  }, []);

  // Helper getters
  const getHadisList = useCallback((): Hadis[] => {
    return hadisData.map((h) => ({
      ...h,
      status: statuses[h.id] || 'belum',
    }));
  }, [statuses]);

  const getHadisById = useCallback((id: number): Hadis | undefined => {
    const original = hadisData.find((h) => h.id === id);
    if (!original) return undefined;
    return {
      ...original,
      status: statuses[id] || 'belum',
    };
  }, [statuses]);

  const getLastOpenedHadis = useCallback((): Hadis => {
    return getHadisById(lastOpenedHadisId) || getHadisList()[0];
  }, [getHadisById, getHadisList, lastOpenedHadisId]);

  const learningTimeMinutes = Math.round((learningSeconds / 60) * 10) / 10;

  const value = useMemo(
    () => ({
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
    }),
    [
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
    ]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
