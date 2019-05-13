{#
Custom head.
#}
<script>
    (function () {
        if ('{{ page.password }}') {
            if (prompt('请输入文章密码') !== '{{ page.password }}') {
                alert('密码错误！');
                if (history.length === 1) {
                    location.replace("https://alessa0.cn"); // 这里替换成你的首页
                } else {
                    history.back();
                }
            }
        }
    })();
</script>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>

<!-- 页面点击小红心 -->
<script type="text/javascript" src="https://image.alessa0.cn/js/love.js"></script>

<!-- leancloud -->
{% if not page.comments %}
<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js" data-no-instant></script>
{% else %}
<script src="//cdn1.lncld.net/static/js/3.11.1/av-min.js" data-no-instant></script>
{% endif %}

<!-- fancybox -->
<link rel="stylesheet" href="https://image.alessa0.cn/css/jquery.fancybox.min.css" data-no-instant>
<script type="text/javascript" src="https://image.alessa0.cn/js/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="https://image.alessa0.cn/js/jquery.fancybox.min.js"></script>

<!-- lazyload -->
<script type="text/javascript" src="https://image.alessa0.cn/js/jquery.scrollstop.js"></script>
<script type="text/javascript" src="https://image.alessa0.cn/js/jquery.lazyload.js"></script>

<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css" data-no-instant>
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js" data-no-instant></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js" data-no-instant></script>

