// service-worker.js

const CACHE_NAME = 'farmsyncbot-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css', // If you have a separate CSS file
  '/logo.png',
  '/manifest.json' // Optional (for PWA)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
