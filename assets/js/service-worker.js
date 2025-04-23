// 定义缓存名称和需要缓存的文件列表
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    // 这里添加你需要缓存的静态资源路径，例如：
    // '/styles/main.css',
    // '/js/scripts.js',
    // '/images/logo.png'
];

// 安装 Service Worker 时缓存资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// 激活 Service Worker 时清理旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// 拦截网络请求，优先使用缓存
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果缓存中有匹配的请求，直接返回缓存响应
                if (response) {
                    return response;
                }
                // 否则，发起网络请求
                return fetch(event.request);
            })
    );
});