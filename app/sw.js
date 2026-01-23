// ═══════════════════════════════════════════════════════════════════════════════
// #B!Mi Plaidoyer Citoyen — Service Worker v4.4
// Mode hors-ligne complet pour hébergement serveur HTTPS
// ═══════════════════════════════════════════════════════════════════════════════

const CACHE_NAME = 'bimi-plaidoyer-v4.4';

// Ressources à mettre en cache immédiatement
const PRECACHE = [
    './',
    './index.html',
    './plaidoyer-v4.4-pwa.html'
];

// Ressources CDN à mettre en cache lors de la première utilisation
const CDN_PATTERNS = [
    'unpkg.com/docx',
    'unpkg.com/vis-network',
    'unpkg.com/mermaid',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
];

// Installation - mise en cache des ressources essentielles
self.addEventListener('install', (event) => {
    console.log('[SW] Installation...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Mise en cache des ressources');
                return cache.addAll(PRECACHE);
            })
            .then(() => self.skipWaiting())
            .catch(err => console.log('[SW] Erreur de cache:', err))
    );
});

// Activation - nettoyage des anciens caches
self.addEventListener('activate', (event) => {
    console.log('[SW] Activation...');
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => {
                        console.log('[SW] Suppression ancien cache:', key);
                        return caches.delete(key);
                    })
            ))
            .then(() => self.clients.claim())
    );
});

// Fetch - stratégie "stale-while-revalidate"
self.addEventListener('fetch', (event) => {
    // Ignorer les requêtes non-GET
    if (event.request.method !== 'GET') return;
    
    // Ignorer les requêtes non-HTTP(S)
    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Lancer la requête réseau en parallèle
                const fetchPromise = fetch(event.request)
                    .then(networkResponse => {
                        // Mettre en cache si réponse valide
                        if (networkResponse.ok) {
                            const shouldCache = 
                                url.origin === location.origin ||
                                CDN_PATTERNS.some(pattern => url.href.includes(pattern));
                            
                            if (shouldCache) {
                                const responseClone = networkResponse.clone();
                                caches.open(CACHE_NAME)
                                    .then(cache => cache.put(event.request, responseClone));
                            }
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        // Hors-ligne : retourner la page principale pour les navigations
                        if (event.request.mode === 'navigate') {
                            return caches.match('./') || caches.match('./index.html');
                        }
                        return null;
                    });
                
                // Retourner le cache immédiatement, ou attendre le réseau
                return cachedResponse || fetchPromise;
            })
    );
});

// Réception de messages
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
    
    if (event.data === 'clearCache') {
        caches.delete(CACHE_NAME).then(() => {
            console.log('[SW] Cache vidé');
        });
    }
});

console.log('[SW] Service Worker #B!Mi Plaidoyer Citoyen chargé');
