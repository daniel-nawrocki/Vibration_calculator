self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('ppv-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json'
            ]);
        })
    );
});
