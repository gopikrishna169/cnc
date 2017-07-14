self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mysite-static-v3').then(function(cache) {
      return cache.addAll([
        './image/1.jpg',
        './image/2.jpg',
        './image/3.jpg',
        './image/first.jpg',
        './image/push-on.png',
        './image/push-off.png',
        './js/notification.js',
        './js/toast.js'
        
      ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-static-v3').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener('push', (event) => {
  console.info('Event: Push');

  var title = 'Rate Us';
  var body = {
    'body': 'Did you like our service ?',
    'tag': '?',
    //Custom actions buttons
    'actions': [
      { 'action': 'yes', 'title': 'Liked '},
      { 'action': 'no', 'title': 'Nope'}
    ]
  };

  event.waitUntil(self.registration.showNotification(title, body));
});



