window.NexT||(window.NexT={}),function(){const e={};let t={};const n=n=>{const o=document.querySelector(`.next-config[data-name="${n}"]`);if(!o)return;const r=(e=>{const t=(new DOMParser).parseFromString(e,"text/html").documentElement.textContent;return JSON.parse(t||"{}")})(o.text);"main"===n?Object.assign(e,r):t[n]=r};n("main"),window.CONFIG=new Proxy({},{get(o,r){let c;if(r in e?c=e[r]:(r in t||n(r),c=t[r]),
// For unset override and mixable existing
r in o||"object"!=typeof c||(
// Get ready to mix.
o[r]={}),r in o){const e=o[r];
// When mixable
return"object"==typeof e&&"object"==typeof c?new Proxy({...c,...e},{set:(t,n,o)=>(t[n]=o,e[n]=o,!0)}):e}
// Only when not mixable and override hasn't been set.
return c}}),document.addEventListener("pjax:success",()=>{t={}})}();