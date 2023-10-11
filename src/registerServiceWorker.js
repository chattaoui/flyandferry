/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  const cacheVersion = 'v1'; // Set your cache version
  const serviceWorkerUrl = `${process.env.BASE_URL}service-worker.js`;

  register(serviceWorkerUrl, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      );
    },
    async registered(registration) {
      console.log('Service worker has been registered.');

      // Check if the cache version matches the version on the server
      const response = await fetch(serviceWorkerUrl);
      const serverVersion = await response.text();

      if (serverVersion !== cacheVersion) {
        // If versions don't match, unregister the service worker and clear cache
        await registration.unregister();
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            caches.delete(cacheName);
          });
        });
        console.log('Cached version does not match server version. Service worker and cache cleared.');
      }
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    }
  });
}
