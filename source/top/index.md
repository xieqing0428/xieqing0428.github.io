---
title: 阅读Top10
comments: false
date: 2019-04-25 23:44:20
---

{% cq %}一卷风云琅琊榜，囊尽天下奇英才。{% endcq %}
<br>

<div id="top"></div>
<script>AV.initialize("spj45BlAacJErU9iVkUjBdMe-9Nh9j0Va", "QxYREXarU2IotL8LwfVAPS0H");</script>
<script type="text/javascript">
  var time=0
  var title=""
  var url=""
  var query = new AV.Query('Counter');
  query.notEqualTo('id',0);
  query.descending('time');
  query.limit(1000);
  query.find().then(function (todo) {
    for (var i=0;i<10;i++){
      var result=todo[i].attributes;
      time=result.time;
      title=result.title;
      url=result.url;
      var content="<a href='"+"https://alessa0.cn"+url+"'>"+title+"</a>"+"<br />"+"<font color='#555'>"+"【阅读次数："+time+"】</font>"+"<br /><br />";
      document.getElementById("top").innerHTML+=content
    }
  }, function (error) {
    console.log("error");
  });
</script>


