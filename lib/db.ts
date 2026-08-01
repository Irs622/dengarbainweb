export interface HadisProgress {
  hadisId: number;
  status: 'belum' | 'sedang' | 'hafal';
  lastListenedAt?: string;
  abLoopStart?: number;
  abLoopEnd?: number;
}

export interface UserSettings {
  id: string;
  deviceUuid: string;
  audioAutoPlay: boolean;
  onboardingCompleted: boolean;
}

// Lightweight IndexedDB helper aligned with Dexie API specifications
class DengarBainDBHelper {
  private dbName = 'DengarBainDB';
  private version = 1;

  private async getDB(): Promise<IDBDatabase | null> {
    if (typeof window === 'undefined' || !window.indexedDB) return null;
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('hadisProgress')) {
          db.createObjectStore('hadisProgress', { keyPath: 'hadisId' });
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'id' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getProgress(hadisId: number): Promise<HadisProgress | undefined> {
    const db = await this.getDB();
    if (!db) return undefined;
    return new Promise((resolve) => {
      const tx = db.transaction('hadisProgress', 'readonly');
      const store = tx.objectStore('hadisProgress');
      const req = store.get(hadisId);
      req.onsuccess = () => resolve(req.result as HadisProgress);
      req.onerror = () => resolve(undefined);
    });
  }

  async saveProgress(progress: HadisProgress): Promise<void> {
    const db = await this.getDB();
    if (!db) return;
    return new Promise((resolve) => {
      const tx = db.transaction('hadisProgress', 'readwrite');
      const store = tx.objectStore('hadisProgress');
      store.put(progress);
      tx.oncomplete = () => resolve();
    });
  }

  async getAllProgress(): Promise<HadisProgress[]> {
    const db = await this.getDB();
    if (!db) return [];
    return new Promise((resolve) => {
      const tx = db.transaction('hadisProgress', 'readonly');
      const store = tx.objectStore('hadisProgress');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result as HadisProgress[]);
      req.onerror = () => resolve([]);
    });
  }
}

export const db = new DengarBainDBHelper();

// Helper to get or generate anonymous Device UUID (No-Login requirement FR-PRO-01)
export function getOrCreateDeviceUUID(): string {
  if (typeof window === 'undefined') return 'server-uuid';
  let uuid = localStorage.getItem('dengarbain_device_uuid');
  if (!uuid) {
    uuid = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : 'dev-' + Math.random().toString(36).substring(2, 11);
    localStorage.setItem('dengarbain_device_uuid', uuid);
  }
  return uuid;
}
