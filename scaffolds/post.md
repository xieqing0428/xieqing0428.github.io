---
title: {{ title }}
date: {{ date }}
updated: 
abbrlink: 
categories: 
- technology
- computer
- computer-aided-art
tags: [标签1,标签2,标签3]
link: 
password:
copyright: true
---
<p class="description">text</p>
<!-- more -->

{% cq %} blah blah blah {% endcq %}

<div class="text-center">{% btn /path/to/url/, text, home fa-lg fa-fw %}</div>

##

```[language] [title] [url] [link-text]
[language] 是代码语言的名称，diff 用来设置代码块颜色高亮，非必须；-红+绿
[title] 是顶部左边的说明，非必须；
[url] 是顶部右边的超链接地址，非必须；
[link text] 如它的字面意思，超链接的名称，非必须。
代码
```
# #

@ 前面的是`label`的名字，后面的是要显示的文字）：

- default

```
{% label default@default %}
```

- primary

```
{% label primary@primary %}
```

- success

```
{% label success@success %}
```

- info

```
{% label info@info %}
```

- warning

```
{% label warning@warning %}
```

- danger

```
{% label danger@danger %}
```

```
{% tabs 选项卡, 1 %}
<!-- tab -->
**这是选项卡 1** 呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈呵呵哈哈哈哈哈哈哈哈……
<!-- endtab -->
<!-- tab -->
**这是选项卡 2**
<!-- endtab -->
<!-- tab -->
**这是选项卡 3** 哇，你找到我了！φ(≧ω≦*)♪～
<!-- endtab -->
{% endtabs %}
```

| 选项          | 默认值     | 描述                                                        |
| ------------- | ---------- | ----------------------------------------------------------- |
| id            | **必须值** | 歌曲 id / 播放列表 id / 相册 id / 搜索关键字                |
| server        | **必须值** | 音乐平台: `netease`, `tencent`, `kugou`, `xiami`, `baidu`   |
| type          | **必须值** | `song`, `playlist`, `album`, `search`, `artist`             |
| fixed         | `false`    | 开启固定模式                                                |
| mini          | `false`    | 开启迷你模式                                                |
| loop          | `all`      | 列表循环模式：`all`, `one`,`none`                           |
| order         | `list`     | 列表播放模式： `list`, `random`                             |
| volume        | 0.7        | 播放器音量                                                  |
| lrctype       | 0          | 歌词格式类型                                                |
| listfolded    | `false`    | 指定音乐播放列表是否折叠                                    |
| storagename   | `metingjs` | LocalStorage 中存储播放器设定的键名                         |
| autoplay      | `true`     | 自动播放，移动端浏览器暂时不支持此功能                      |
| mutex         | `true`     | 该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停 |
| listmaxheight | `340px`    | 播放列表的最大长度                                          |
| preload       | `auto`     | 音乐文件预载入模式，可选项： `none`, `metadata`, `auto`     |
| theme         | `#ad7a86`  | 播放器风格色彩设置                                          |

```
{% pdf /path/to/your/file.pdf %}
```

<br />

<meting-js
    id=""
    server="netease"
    type="song"
    preload="none">
</meting-js>

<meting-js
   auto="https://y.qq.com/n/yqq/song/001RGrEX3ija5X.html">
</meting-js>
<meting-js
    name="山海"
    artist="草东没有派对"
    url="https://music.alessa0.cn/草东没有派对-山海.mp3"
    cover="https://image.alessa0.cn/草东没有派对-山海.jpg"
    autoplay="true">
</meting-js>

<hr />
