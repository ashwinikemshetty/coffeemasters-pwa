self.addEventListener("install", async event => {
    const cache = await caches.open("cm-appshell");
    cache.addAll(
        [
            "/",
            "/styles.css",
            "/scripts/API.js",
            "/scripts/app.js",
            "/scripts/Menu.js",
            "/scripts/Order.js",
            "/scripts/router.js",
            "/images/logo.svg",
            "/images/icons/icon.png",
            "https://cdn.jsdelivr.net/npm/idb@8/build/umd.js",
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap",
            "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
            "https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2",
            "https://fonts.gstatic.com/s/materialsymbolsoutlined/v68/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1n-q_4MrImHCIJIZrDCvHOejbd5zrDAt.woff2"
        ]
    )
})

self.addEventListener("fetch", async event => {
    event.respondWith(

        (async () => {
            try {
                const fetchResponse = await fetch(event.request);
                return fetchResponse;
            } catch (e) {
                const cachedResponse = await caches.match(event.request);
                if (cachedResponse) return cachedResponse;
            }
        })()

    );
});

self.addEventListener("fetch", event =>{
    // cache first
    event.respondWith (
        (async () =>{
            const cachedResponse = await caches.match(event.request);
            if(cachedResponse){
                return cachedResponse;
            }else{
                return fetch(event.request);
            }
        })()
    )
})