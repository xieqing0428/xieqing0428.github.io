/* 载入 sw-toolbox.js 与定义缓存版本、名称、最大缓存数量 */
self.importScripts("https://cdnjs.cat.net/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js");
self.toolbox.options.debug = false;
self.toolbox.options.networkTimeoutSeconds = 3;
var cacheVersion = "-17104";
var staticImageCacheName = "image" + cacheVersion;
var staticAssetsCacheName = "assets" + cacheVersion;
var contentCacheName = "content" + cacheVersion;
var vendorCacheName = "vendor" + cacheVersion;
var maxEntries = 100;

/* 图床缓存 */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /alessa0-image-1254236546\.cos\.ap-shanghai\.myqcloud\.com/,
    cache: {
        name: staticImageCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /alessa0-music-1254236546\.cos\.ap-shanghai\.myqcloud\.com/,
    cache: {
        name: staticImageCacheName,
        maxEntries: maxEntries
    }
});

/* 静态内容缓存 */
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /cdn\.bootcss\.com/,
    cache: {
        name: staticAssetsCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /cdnjs\.cloudflare\.com/,
    cache: {
        name: staticAssetsCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /cdn1\.lncld\.net/,
    cache: {
        name: staticAssetsCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
    origin: /api\.imjad\.cn/,
    cache: {
        name: staticAssetsCacheName,
        maxEntries: maxEntries
    }
});
self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {origin: /(hm\.baidu\.com)/,
    cache: {
        name: vendorCacheName,
        maxEntries: maxEntries
    }
});

/* 网页内容缓存 */
self.toolbox.router.get("/(.*)", self.toolbox.networkFirst, {
    origin: /alessa0\.cn/,
    cache: {
       name: contentCacheName,
       maxEntries: maxEntries
    }
});

/* 不缓存*/
self.toolbox.router.get("/sw.js", self.toolbox.networkFirst);

/* 预缓存*/
self.addEventListener("install",
function(event) {return event.waitUntil(self.skipWaiting())
});
self.addEventListener("activate",
function(event) {return event.waitUntil(self.clients.claim())
})