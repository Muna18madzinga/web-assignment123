const CACHE_NAME = '3d-portfolio-v1';
const CRITICAL_ASSETS = [
  '/',
  '/index.html',
  '/images/bg.png',
  '/images/person.png',
  '/images/textures/mat1.png',
  '/models/optimized-room.glb',
];

const ASSETS_TO_CACHE = [
  ...CRITICAL_ASSETS,
  '/images/logos/react.png',
  '/images/logos/three.png',
  '/images/logos/node.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'document' || 
      event.request.url.includes('.glb') ||
      event.request.url.includes('.png') ||
      event.request.url.includes('.jpg')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  }
});