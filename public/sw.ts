// self.addEventListener('push', (event) => {
//   const data = { title: "You have a new notification", body: "hello" };

//   const options: NotificationOptions = {
//     body: data.body || 'You have a new notification',
//     icon: '/icon.png',
//     badge: '/badge.png'
//   };

//   // Use event.waitUntil to keep the service worker alive until the promise resolves
//   event.waitUntil(
//     self.registration.showNotification(data.title || 'Notification', options)
//   );
// });
