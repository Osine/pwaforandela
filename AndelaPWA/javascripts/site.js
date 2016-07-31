navigator.serviceWorker && navigator.serviceWorker.register('javascripts/sw.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});

navigator.serviceWorker && navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {  
  serviceWorkerRegistration.pushManager.getSubscription()  
    .then(function(subscription) {  
            if (subscription) {
        console.info('Got existing', subscription);
        return;  // got one, yay
      }
      serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true})
        .then(function(subscription) { 
          console.info('Newly subscribed to push!', subscription);
        });
    });
});



