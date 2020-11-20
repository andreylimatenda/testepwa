self.addEventListener('install', function(e) {
 e.waitUntil(
  console.log("installed");
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       'index.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
