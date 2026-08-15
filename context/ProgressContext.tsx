'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { hadisData, Hadis, HadisStatus } from '@/data/hadis';

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

  // Load state from localStorage on initial render
  useEffect(() => {
    try {
      // 1. Statuses
      const savedStatuses = localStorage.getItem(STORAGE_KEY_STATUSES);
      if (savedStatuses) {
        setStatuses(JSON.parse(savedStatuses));
      } else {
        const initialMap: Record<number, HadisStatus> = {};
        hadisData.forEach((h) => {
          initialMap[h.id] = h.status;
        });
        setStatuses(initialMap);
      }

      // 2. Last opened
      const savedLastOpened = localStorage.getItem(STORAGE_KEY_LAST_OPENED);
      if (savedLastOpened) {
        setLastOpenedHadisId(Number(savedLastOpened));
      }

      // 3. Activities
      const savedActivities = localStorage.getItem(STORAGE_KEY_ACTIVITIES);
      if (savedActivities) {
        setActivities(JSON.parse(savedActivities));
      }

      // 4. Learning time
      const savedSeconds = localStorage.getItem(STORAGE_KEY_LEARNING_SECONDS);
      if (savedSeconds) {
        setLearningSeconds(Number(savedSeconds));
      }

      // 5. Daily streak tracking
      const today = getTodayString();
      const savedDates = localStorage.getItem(STORAGE_KEY_ACTIVE_DATES);
      let datesList: string[] = savedDates ? JSON.parse(savedDates) : [];
      if (!datesList.includes(today)) {
        datesList.push(today);
        localStorage.setItem(STORAGE_KEY_ACTIVE_DATES, JSON.stringify(datesList));
      }
      setStreakDays(calculateStreak(datesList));

    } catch (err) {
      console.error('Failed to load progress from localStorage:', err);
    }
  }, []);

  // Update status function
  const updateStatus = (hadisId: number, status: HadisStatus) => {
    setStatuses((prev) => {
      const updated = { ...prev, [hadisId]: status };
      try {
        localStorage.setItem(STORAGE_KEY_STATUSES, JSON.stringify(updated));
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
          localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(updatedList));
        } catch (err) {
          console.error('Failed to save activities:', err);
        }
        return updatedList;
      });
    }
  };

  // Update last opened hadis
  const updateLastOpened = (hadisId: number) => {
    setLastOpenedHadisId(hadisId);
    try {
      localStorage.setItem(STORAGE_KEY_LAST_OPENED, String(hadisId));
    } catch (err) {
      console.error('Failed to save last opened hadis:', err);
    }
  };

  // Add learning seconds dynamically from Audio Player
  const addLearningSeconds = (seconds: number, hadisId?: number) => {
    setLearningSeconds((prev) => {
      const updated = prev + seconds;
      try {
        localStorage.setItem(STORAGE_KEY_LEARNING_SECONDS, String(updated));
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
            localStorage.setItem(STORAGE_KEY_ACTIVITIES, JSON.stringify(updatedList));
          } catch (err) {
            console.error('Failed to save activities:', err);
          }
          return updatedList;
        });
      }
    }
  };

  // Reset all progress completely
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
      localStorage.removeItem(STORAGE_KEY_STATUSES);
      localStorage.removeItem(STORAGE_KEY_LAST_OPENED);
      localStorage.removeItem(STORAGE_KEY_ACTIVITIES);
      localStorage.removeItem(STORAGE_KEY_LEARNING_SECONDS);
      localStorage.removeItem(STORAGE_KEY_ACTIVE_DATES);
    } catch (err) {
      console.error('Failed to clear localStorage:', err);
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
