export interface HadisProgress {
  hadisId: number;
  status: 'belum' | 'sedang' | 'hafal';
  lastListenedAt?: string;
  abLoopStart?: number;
  abLoopEnd?: number;
}

export interface ActivityRecord {
  id: string;
  hadisId: number;
  title: string;
  desc: string;
  timestamp: string;
}

export interface UserSettings {
  id: string;
  deviceUuid: string;
  audioAutoPlay: boolean;
  onboardingCompleted: boolean;
}

export interface StorageEstimateResult {
  usageBytes: number;
  quotaBytes: number;
  cachedAudioCount: number;
  hasIndexedDB: boolean;
}

// Lightweight, robust IndexedDB helper for DengarBain Dual Storage
class DengarBainDBHelper {
  private dbName = 'DengarBainDB';
  private version = 2;

  private async getDB(): Promise<IDBDatabase | null> {
    if (typeof window === 'undefined' || !window.indexedDB) return null;
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onupgradeneeded = (event) => {
        const db = request.result;
        
        // 1. Hadis Progress Store
        if (!db.objectStoreNames.contains('hadisProgress')) {
          db.createObjectStore('hadisProgress', { keyPath: 'hadisId' });
        }
        
        // 2. User Settings Store
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'id' });
        }

        // 3. Activity History Store
        if (!db.objectStoreNames.contains('activities')) {
          db.createObjectStore('activities', { keyPath: 'id' });
        }

        // 4. Key-Value App State Store (e.g. learningSeconds, streakDates, lastOpenedHadisId)
        if (!db.objectStoreNames.contains('appState')) {
          db.createObjectStore('appState', { keyPath: 'key' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => {
        console.warn('IndexedDB open error:', request.error);
        resolve(null);
      };
    });
  }

  // --- Hadis Progress Methods ---
  async getProgress(hadisId: number): Promise<HadisProgress | undefined> {
    const db = await this.getDB();
    if (!db) return undefined;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('hadisProgress', 'readonly');
        const store = tx.objectStore('hadisProgress');
        const req = store.get(hadisId);
        req.onsuccess = () => resolve(req.result as HadisProgress);
        req.onerror = () => resolve(undefined);
      } catch {
        resolve(undefined);
      }
    });
  }

  async saveHadisStatus(hadisId: number, status: 'belum' | 'sedang' | 'hafal'): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('hadisProgress', 'readwrite');
        const store = tx.objectStore('hadisProgress');
        store.put({ hadisId, status, lastListenedAt: new Date().toISOString() });
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async bulkSaveHadisStatus(statuses: Record<number, 'belum' | 'sedang' | 'hafal'>): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('hadisProgress', 'readwrite');
        const store = tx.objectStore('hadisProgress');
        Object.entries(statuses).forEach(([idStr, status]) => {
          const hadisId = Number(idStr);
          if (!isNaN(hadisId)) {
            store.put({ hadisId, status, lastListenedAt: new Date().toISOString() });
          }
        });
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async getAllHadisStatuses(): Promise<Record<number, 'belum' | 'sedang' | 'hafal'>> {
    const db = await this.getDB();
    if (!db) return {};
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('hadisProgress', 'readonly');
        const store = tx.objectStore('hadisProgress');
        const req = store.getAll();
        req.onsuccess = () => {
          const list = (req.result || []) as HadisProgress[];
          const map: Record<number, 'belum' | 'sedang' | 'hafal'> = {};
          list.forEach((item) => {
            map[item.hadisId] = item.status;
          });
          resolve(map);
        };
        req.onerror = () => resolve({});
      } catch {
        resolve({});
      }
    });
  }

  // --- Activity History Methods ---
  async saveActivity(activity: ActivityRecord): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('activities', 'readwrite');
        const store = tx.objectStore('activities');
        store.put(activity);
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async saveActivities(activities: ActivityRecord[]): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('activities', 'readwrite');
        const store = tx.objectStore('activities');
        activities.forEach((act) => store.put(act));
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async getActivities(): Promise<ActivityRecord[]> {
    const db = await this.getDB();
    if (!db) return [];
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('activities', 'readonly');
        const store = tx.objectStore('activities');
        const req = store.getAll();
        req.onsuccess = () => resolve((req.result || []) as ActivityRecord[]);
        req.onerror = () => resolve([]);
      } catch {
        resolve([]);
      }
    });
  }

  // --- Key-Value App State Methods ---
  async setAppState<T>(key: string, value: T): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('appState', 'readwrite');
        const store = tx.objectStore('appState');
        store.put({ key, value });
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  async getAppState<T>(key: string, defaultValue?: T): Promise<T | undefined> {
    const db = await this.getDB();
    if (!db) return defaultValue;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction('appState', 'readonly');
        const store = tx.objectStore('appState');
        const req = store.get(key);
        req.onsuccess = () => {
          if (req.result && req.result.value !== undefined) {
            resolve(req.result.value as T);
          } else {
            resolve(defaultValue);
          }
        };
        req.onerror = () => resolve(defaultValue);
      } catch {
        resolve(defaultValue);
      }
    });
  }

  // --- Reset / Clear Methods ---
  async clearAllData(): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      try {
        const tx = db.transaction(['hadisProgress', 'activities', 'appState', 'settings'], 'readwrite');
        tx.objectStore('hadisProgress').clear();
        tx.objectStore('activities').clear();
        tx.objectStore('appState').clear();
        tx.objectStore('settings').clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      } catch {
        resolve();
      }
    });
  }

  // --- Storage Capacity & Cache Query ---
  async getRealStorageEstimate(): Promise<StorageEstimateResult> {
    let usageBytes = 0;
    let quotaBytes = 2 * 1024 * 1024 * 1024; // Default 2 GB fallback
    let cachedAudioCount = 0;

    if (typeof window !== 'undefined') {
      // 1. Query browser quota API
      if (navigator.storage && navigator.storage.estimate) {
        try {
          const estimate = await navigator.storage.estimate();
          if (estimate.usage !== undefined) usageBytes = estimate.usage;
          if (estimate.quota !== undefined) quotaBytes = estimate.quota;
        } catch (err) {
          console.warn('Storage estimate failed:', err);
        }
      }

      // 2. Query Cache Storage API for audio/cached files
      if ('caches' in window) {
        try {
          const cacheKeys = await caches.keys();
          for (const key of cacheKeys) {
            const cache = await caches.open(key);
            const requests = await cache.keys();
            const audioReqs = requests.filter(
              (r) => r.url.endsWith('.mp3') || r.url.includes('/audio/') || r.url.includes('hadis')
            );
            cachedAudioCount += audioReqs.length > 0 ? audioReqs.length : requests.length;
          }
        } catch (err) {
          console.warn('Cache keys inspection failed:', err);
        }
      }

      // If usage is 0 or unmeasured (e.g. simulated environment), estimate based on LocalStorage + IndexedDB
      if (usageBytes === 0) {
        try {
          let lsSize = 0;
          for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k) {
              lsSize += (k.length + (localStorage.getItem(k)?.length || 0)) * 2;
            }
          }
          usageBytes = Math.max(1024 * 512, lsSize); // at least 512 KB
        } catch {
          usageBytes = 1024 * 1024; // 1 MB
        }
      }
    }

    return {
      usageBytes,
      quotaBytes,
      cachedAudioCount,
      hasIndexedDB: typeof window !== 'undefined' && !!window.indexedDB,
    };
  }

  // --- Clear Audio / App Caches ---
  async clearAudioCache(): Promise<void> {
    if (typeof window === 'undefined') return;

    if ('caches' in window) {
      try {
        const cacheKeys = await caches.keys();
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      } catch (err) {
        console.warn('Failed to delete caches:', err);
      }
    }
  }
}

export const db = new DengarBainDBHelper();

// Helper to get or generate anonymous Device UUID (No-Login requirement FR-PRO-01)
export function getOrCreateDeviceUUID(): string {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined' || typeof window.localStorage.getItem !== 'function') {
    return 'server-uuid';
  }
  let uuid = window.localStorage.getItem('dengarbain_device_uuid');
  if (!uuid) {
    uuid = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : 'dev-' + Math.random().toString(36).substring(2, 11);
    window.localStorage.setItem('dengarbain_device_uuid', uuid);
  }
  return uuid;
}
