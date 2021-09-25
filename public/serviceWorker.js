cacheName = "v2";
self.addEventListener("install", (event) => console.log("Install", event))
self.addEventListener("activate", (event) => {
    // event.waitUntil(
    //     caches.keys().then(cacheNames=>{
    //         console.log(cacheNames)
    //         return new Promise.resolve();
    //     })
    // )
})
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                let responseClone = response.clone()
                // caches.open(cacheName).then(cache => cache.put(event.request, responseClone))
                return response;
            })
    )
    // let response = await fetch(event.request)
    // let responseClone = response.clone();
    // let cache = await caches.open(cacheName);
    // cache.put(event.request, responseClone);
    // return event.respondWith(response)
});