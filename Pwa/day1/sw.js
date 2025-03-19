const staticFilesToCache = [
  'index.html',
  'pages/another.html',
  'CSS/style.css',
  'main.js',
  'pages/offline.html',
  'pages/404.html'
]

const cacheName = 'pages-v1'
self.addEventListener('install', event => {
  console.log('installing service worker')
  event.waitUntil(
      caches.open(cacheName)
          .then(cache => {
              return cache.addAll(staticFilesToCache)
          })
          .catch(err => {
              console.log(err)
          })
  )
})

self.addEventListener('activate', event => {
  console.log('activating service worker')
})

self.addEventListener('fetch', event => {
  console.log('fetching.........', event)
  event.respondWith(
      caches.match(event.request)
          .then(
              response => {
                if (response) {
                    console.log("Found : ", event.request.url, " in cache");
                    return response;
                  }
                  console.log('network request', event.request.url)
                  return fetch(event.request).then((res) => {
                      if (res.status != 200) {
                          throw 'invalid respond'
                      }
                      return res;
                  }).catch((err) => {
                      console.log(err);
                      if (err === 'invalid respond') {
                          return caches.match('pages/404.html');
                      }
                      else {
                          return caches.match('pages/offline.html');
                      }
                  })
              }
          )
          .catch(err => {
              console.log(err)
          })
  )
})