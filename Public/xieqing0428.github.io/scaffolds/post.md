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
description:
link:
password:
comments: true
copyright: true
---
<p class="description">text</p>
<!-- more -->

```{% cq %} blah blah blah {% endcq %}```

```{% btn /path/to/url/, text, icon [class], title %}```

##

```[language] [title] [url] [link-text]
[language] 是代码语言的名称，diff 用来设置代码块颜色高亮，非必须；-红+绿
[title] 是顶部左边的说明，非必须；
[url] 是顶部右边的超链接地址，非必须；
[link text] 如它的字面意思，超链接的名称，非必须。
代码
```
##

相对路径引用

```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

# #



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
| mutex         | `true`     | 该选项开启时，如果同页面有其他 aplayer 播放，该播
放器会暂停 |
| listmaxheight | `340px`    | 播放列表的最大长度                                          |
| preload       | `auto`     | 音乐文件预载入模式，可选项： `none`, `metadata`, `auto`     |
| theme         | `#ad7a86`  | 播放器风格色彩设置                                          |

<div class="aplayer"
    data-id="60198"
    data-server="netease"
    data-type="playlist">
</div>
<div class="aplayer"
    data-name="山海"
    data-artist="草东没有派对"
    data-url="https://music.alessa0.cn/草东没有派对-山海.mp3"
    data-cover="https://music.alessa0.cn/草东没有派对-山海.jpg"
    data-autoplay="true">
</div>
<script src="https://cdn.jsdelivr.net/npm/meting@1.2/dist/Meting.min.js"></script>

<hr />
