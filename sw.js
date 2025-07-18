// Service Worker for Anas Math Website
const CACHE_NAME = 'anas-math-v1.0.0';
const STATIC_CACHE = 'anas-math-static-v1';
const DYNAMIC_CACHE = 'anas-math-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/ai-chatbot.js',
    '/manifest.json',
    '/404.html',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap'
];

// Install event - cache static files
self.addEventListener('install', event => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('Service Worker: Static files cached');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('Service Worker: Error caching static files', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Handle different types of requests
    if (request.destination === 'document') {
        // Handle HTML pages
        event.respondWith(handlePageRequest(request));
    } else if (request.destination === 'style' || request.destination === 'script') {
        // Handle CSS and JS files
        event.respondWith(handleStaticRequest(request));
    } else if (request.destination === 'image') {
        // Handle images
        event.respondWith(handleImageRequest(request));
    } else if (request.url.includes("generativelanguage.googleapis.com")) {
        // Let Gemini API requests pass directly to the network
        event.respondWith(fetch(request));
    } else {
        // Handle other non-Gemini requests
        event.respondWith(handleOtherRequest(request));
    }
});

// Handle page requests (HTML)
async function handlePageRequest(request) {
    try {
        // Try network first for HTML pages
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            // Cache the response
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
            return networkResponse;
        }
    } catch (error) {
        console.log('Network failed for page request, trying cache');
    }

    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    // Fallback to index.html for SPA routing
    return caches.match('/index.html');
}

// Handle static requests (CSS, JS)
async function handleStaticRequest(request) {
    // Try cache first for static files
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        // Fallback to network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            // Cache the response
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Failed to fetch static file:', error);
        // Return a fallback response
        return new Response('', { status: 404 });
    }
}

// Handle image requests
async function handleImageRequest(request) {
    // Try cache first for images
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        // Fallback to network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            // Cache the response
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Failed to fetch image:', error);
        // Return a placeholder image
        return new Response('', { status: 404 });
    }
}

// Handle other requests
async function handleOtherRequest(request) {
    try {
        // Try network first
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            // Cache the response
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Failed to fetch resource:', error);
        // Try cache as fallback
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        return new Response('', { status: 404 });
    }
}

// Background sync for offline actions
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

async function doBackgroundSync() {
    try {
        // Perform background sync tasks
        console.log('Service Worker: Performing background sync');
        // Add your background sync logic here
    } catch (error) {
        console.error('Service Worker: Background sync failed', error);
    }
}

// Push notifications
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/assets/images/icon-192x192.png',
            badge: '/assets/images/badge-72x72.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: 1
            },
            actions: [
                {
                    action: 'explore',
                    title: 'استكشف الموقع',
                    icon: '/assets/images/checkmark.png'
                },
                {
                    action: 'close',
                    title: 'إغلاق',
                    icon: '/assets/images/xmark.png'
                }
            ]
        };

        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    } else if (event.action === 'close') {
        // Just close the notification
    } else {
        // Default action - open the website
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Handle notification close
self.addEventListener('notificationclose', event => {
    console.log('Notification was closed', event);
});

// Message handling
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
});

// Error handling
self.addEventListener('error', event => {
    console.error('Service Worker error:', event.error);
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', event => {
    console.error('Service Worker unhandled rejection:', event.reason);
});

// Cache management functions
async function clearOldCaches() {
    const cacheNames = await caches.keys();
    const oldCaches = cacheNames.filter(name => 
        name !== STATIC_CACHE && name !== DYNAMIC_CACHE
    );
    
    return Promise.all(
        oldCaches.map(name => caches.delete(name))
    );
}

async function updateStaticCache() {
    const cache = await caches.open(STATIC_CACHE);
    return cache.addAll(STATIC_FILES);
}

// Export functions for external use
self.clearOldCaches = clearOldCaches;
self.updateStaticCache = updateStaticCache; 