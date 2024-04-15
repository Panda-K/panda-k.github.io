if('serviceWorker' in window.navigator) {
  window.navigator.serviceWorker
            .register('./sw2.js')
            .then(function() { console.log('Service Worker Registered'); });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  // 存放事件用于后续触发
  window["deferredPrompt"] = e;
});