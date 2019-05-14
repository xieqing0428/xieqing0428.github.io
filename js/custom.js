// build time:Tue May 14 2019 08:43:40 GMT+0800 (GMT+08:00)
if("serviceWorker"in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(function(e){console.log("ServiceWorker registration failed: ",e)})})}
//rebuild by neat 