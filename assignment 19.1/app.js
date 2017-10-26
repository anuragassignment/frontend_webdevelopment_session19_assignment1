// service worker file registered

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function () {
            console.log('service worker reistered');
        });
}

if (navigator.onLine) {
    console.log('you are online');
} else {
    alert('Please check your connection settings');
}