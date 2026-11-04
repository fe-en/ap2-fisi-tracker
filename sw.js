const CACHE_NAME = "ap2-fisi-tracker-v5.0.0-serverschrank"; // rev: fix-import-and-stats
const ASSETS = [
	"index.html",
	"glossar.html",
	"updates.html",
	"help.html",
	"subnet.html",
	"sql.html",
	"skripte.html",
	"bildungseinrichtungen.html",
	"datenschutz.html",
	"impressum.html",
	"favicon.svg",
	"manifest.json",
	"assets/css/style.css?v=5.0.0",
	"assets/js/tailwind.js?v=5.0.0",
	"assets/js/lucide.min.js?v=5.0.0",
	"assets/js/confetti.js?v=5.0.0",
	"assets/js/data.js?v=5.0.0",
	"assets/js/questions.js?v=5.0.0",
	"assets/js/app.js?v=5.0.0",
	"assets/js/skripte.js?v=5.0.0",
	"assets/js/subnet.js?v=5.0.0",
	"assets/js/sql.js?v=5.0.0",
	"assets/fonts/Barlow-Regular.woff2",
	"assets/fonts/Barlow-Medium.woff2",
	"assets/fonts/Barlow-SemiBold.woff2",
	"assets/fonts/Barlow-Bold.woff2",
	"assets/fonts/BarlowCond-SemiBold.woff2",
	"assets/fonts/BarlowCond-Bold.woff2",
	"assets/fonts/PlexMono-Regular.woff2",
	"assets/fonts/PlexMono-SemiBold.woff2",
	"icon-192.png",
	"icon-512.png",
];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(ASSETS);
		}),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys.map((key) => {
					if (key !== CACHE_NAME) {
						return caches.delete(key);
					}
				}),
			);
		}),
	);
	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	// Nur GET-Anfragen cachen
	if (event.request.method !== "GET") return;

	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			if (cachedResponse) {
				// Im Hintergrund nach Aktualisierung suchen (Stale-While-Revalidate)
				fetch(event.request)
					.then((networkResponse) => {
						if (networkResponse.status === 200) {
							caches.open(CACHE_NAME).then((cache) => {
								cache.put(event.request, networkResponse);
							});
						}
					})
					.catch(() => {
						/* Netzwerkfehler im Hintergrund ignorieren */
					});

				return cachedResponse;
			}

			return fetch(event.request).then((networkResponse) => {
				if (networkResponse.status === 200) {
					const responseClone = networkResponse.clone();
					caches.open(CACHE_NAME).then((cache) => {
						cache.put(event.request, responseClone);
					});
				}
				return networkResponse;
			});
		}),
	);
});
