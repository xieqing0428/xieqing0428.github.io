{% if theme.google_analytics.tracking_id %}
  <script async src="//www.googletagmanager.com/gtag/js?id={{ theme.google_analytics.tracking_id }}" data-no-instant></script>
  <script data-no-instant>
    var host = window.location.hostname;
    if (host !== "localhost" || !{{theme.google_analytics.localhost_ignored}}) {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '{{ theme.google_analytics.tracking_id }}');
    }
  </script>
  <script data-no-instant>
!function(a,b,c,d,e){var f=c.screen,g=encodeURIComponent,h=["ga="+a,"dt="+g(d.title),"dr="+g(d.referrer),"ul="+(e.language||e.browserLanguage||e.userLanguage),"sd="+f.colorDepth+"-bit","sr="+f.width+"x"+f.height,"vp="+Math.max(d.documentElement.clientWidth,c.innerWidth||0)+"x"+Math.max(d.documentElement.clientHeight,c.innerHeight||0),"z="+ +new Date];c.__ga_img=new Image,c.__ga_img.src=b+"?"+h.join("&")}("{{ theme.google_analytics.tracking_id }}","https://ga.giuem.com",window,document,navigator,location);
  </script>
{% endif %}
