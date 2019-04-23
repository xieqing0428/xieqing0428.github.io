#!/bin/bash

# 操作序列
hexo tencent-cos sync
git add .
git commit -m "blog update"
git push -u origin master
echo  ' >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Hexo已成功部署 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'
