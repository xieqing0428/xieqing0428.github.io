if(CONFIG.google_analytics.only_pageview){const a=()=>{if(CONFIG.hostname!==location.hostname)return;const a=localStorage.getItem("uid")||Math.random()+"."+Math.random();localStorage.setItem("uid",a),navigator.sendBeacon("https://www.google-analytics.com/collect",new URLSearchParams({v:1,tid:CONFIG.google_analytics.tracking_id,cid:a,t:"pageview",dp:encodeURIComponent(location.pathname)}))};document.addEventListener("pjax:complete",a),a()}else CONFIG.hostname===location.hostname&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",CONFIG.google_analytics.tracking_id),document.addEventListener("pjax:success",()=>{gtag("event","page_view",{page_location:location.href,page_path:location.pathname,page_title:document.title})}));