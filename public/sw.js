const CACHE_NAME = 'dengarbain-cache-v2';

const PRECACHE_URLS = [
  '/',
  '/hadis',
  '/progres',
  '/settings',
  '/settings/about',
  '/settings/help',
  '/settings/storage',
  '/settings/download',
  '/manifest.json',
  '/brand/dengarbain-primary.png',
  '/brand/dengarbain-secondary.png',
];

// 1. Install Event: Pre-cache critical routes and assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((err) => {
        console.warn('Pre-caching failed during SW install:', err);
      })
  );
});

// 2. Activate Event: Clean up outdated caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// 3. Fetch Event: Offline-first caching strategies
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET requests and http/https schemes
  if (request.method !== 'GET' || !url.protocol.startsWith('http')) {
    return;
  }

  // Strategy A: Navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(async () => {
          // Offline fallback
          const cachedResponse = await caches.match(request);
          if (cachedResponse) return cachedResponse;

          // Try home or hadis fallback
          const fallback = await caches.match('/hadis') || await caches.match('/');
          return fallback || new Response(
            '<html><head><meta charset="utf-8"><title>DengarBain Luring</title></head><body style="font-family:sans-serif;padding:24px;text-align:center;background:#F4F3EE;color:#1A5C40;"><h2>DengarBain Mode Luring</h2><p>Halaman ini belum tersimpan di memori luring perangkat Anda. Silakan hubungkan kembali internet untuk menyinkronkan data.</p><a href="/hadis" style="color:#1A5C40;font-weight:bold;">Buka Hadis Tersimpan</a></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // Strategy B: Audio files (.wav, .mp3 or audio pipeline)
  if (url.pathname.endsWith('.mp3') || url.pathname.endsWith('.wav') || url.pathname.includes('/audio/')) {
    event.respondWith(
      caches.match(request).then((cachedAudio) => {
        if (cachedAudio) return cachedAudio;

        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy C: Static assets (Next.js chunks, fonts, images) - Cache First with Network Fallback
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/brand/') ||
    url.pathname.includes('/fonts/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;

        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy D: General Network with Cache Fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});
