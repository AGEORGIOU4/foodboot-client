self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open('foodboot-cache')
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll();
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});