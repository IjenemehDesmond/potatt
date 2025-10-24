self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("click-game-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "manifest.json",
        "image-192.png",
        "image-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
