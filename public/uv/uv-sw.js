importScripts("/uv.sw.js"); // According to the SW error this file needs to be in uv directory

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
