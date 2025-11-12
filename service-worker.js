// Versioned cache name so we can force refreshes when releasing new versions
const CACHE_NAME = 'customers-cache-v2';
const OFFLINE_URLS = [
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './flag-pt.png',
  './flag-jp.png'
];

self.addEventListener('install', event => {
  // activate new SW immediately
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener('activate', event => {
  // take control of uncontrolled clients as soon as possible
  event.waitUntil(
    (async () => {
      // cleanup old caches
      const keys = await caches.keys();
      await Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
      await self.clients.claim();
    })()
  );
});

// For navigation requests use network-first so users get the latest index.html
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(event.request);
        // update cache in background
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, networkResponse.clone()).catch(() => {});
        return networkResponse;
      } catch (err) {
        const cached = await caches.match('./index.html');
        return cached;
      }
    })());
    return;
  }

  // For other requests use cache-first, falling back to network
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(() => caches.match('./index.html'))
  );
});
