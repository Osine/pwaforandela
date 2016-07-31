/** An empty service worker! */

self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Got Push?', {
      body: 'Push Message received'
   }));
});

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function(cache) {
    return cache.addAll([
'/',
'index.html',
'javascripts/main.js',
'stylesheets/stylesheet.css',
'stylesheets/paginate.css',
'images/bg_hr.png',
'site.js';
]);
    });
  );
  
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

});

