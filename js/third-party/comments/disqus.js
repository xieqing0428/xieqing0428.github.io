document.addEventListener("page:loaded",()=>{if(CONFIG.disqus.count){const s=()=>{NexT.utils.getScript(`https://${CONFIG.disqus.shortname}.disqus.com/count.js`,{attributes:{id:"dsq-count-scr"}})};window.addEventListener("load",s,!1)}CONFIG.page.comments&&(window.disqus_config=function(){this.page.url=CONFIG.page.permalink,this.page.identifier=CONFIG.page.path,this.page.title=CONFIG.page.title,"disqus"!==CONFIG.disqus.i18n.disqus&&(this.language=CONFIG.disqus.i18n.disqus)},NexT.utils.loadComments("#disqus_thread").then(()=>{window.DISQUS?DISQUS.reset({reload:!0,config:window.disqus_config}):NexT.utils.getScript(`https://${CONFIG.disqus.shortname}.disqus.com/embed.js`,{attributes:{dataset:{timestamp:""+ +new Date}}})}))});