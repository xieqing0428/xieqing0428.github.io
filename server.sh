#!/bin/bash

cd ~/xieqing0428.github.io/log/

current=`date "+%Y-%m-%d %H:%M:%S"`  
name=$(date '+%y-%m-%d')

echo 'INFO     server.sh 部署开始'
#如果文件夹不存在，创建文件夹
if [ ! -f $name.log ]; then
  cd ~/xieqing0428.github.io/
  touch $name.log
  echo 'SUCCESS  创建今日log文件'
else
  mv $name.log ~/xieqing0428.github.io/
  cd ~/xieqing0428.github.io/
fi

# 操作序列
echo '=============================================================' >> $name.log
echo $current >> $name.log
echo '===================== server.sh 部署开始 =====================' >> $name.log
hexo clean >> $name.log
echo '===================== hexo-clean部署结束 =====================' >> $name.log
echo 'SUCCESS  hexo-clean 完成'
mv ~/xieqing0428.github.io/tools/TinyPNG/tinypng.py ~/xieqing0428.github.io/
python tinypng.py -i photos/ -o source/static/ >> $name.log
mv tinypng.py ~/xieqing0428.github.io/tools/TinyPNG/tinypng.py
echo '====================== Picture 压缩完毕 ======================' >> $name.log
echo 'SUCCESS  Picture压缩 完成'
hexo tencent-cos sync >> $name.log
echo '==================== tencent-cos 部署结束 ====================' >> $name.log
echo 'SUCCESS  腾讯-COS上传 完成'
node scripts/phototool.js >> $name.log
echo 'INFO  node scripts/phototool.js...' >> $name.log
echo '===================== PhotoJSON 生成完毕 =====================' >> $name.log
echo 'SUCCESS  生成JSON 完成'
hexo recommend >> $name.log
echo '================== hexo-rencommend 部署结束 ==================' >> $name.log
echo 'SUCCESS  hexo-rencommend 完成'
hexo generate >> $name.log
echo '=================== hexo-generate 部署结束 ===================' >> $name.log
echo 'SUCCESS  hexo-generate 完成'
cp source/loveheart/index.html public/loveheart/index.html
rm -rf public/static
sleep 1
echo 'INFO     hexo-deploy 进行中'
echo '============================================================='
# gulp
# echo '======================== gulp部署结束 ========================'
hexo deploy >> $name.log
echo '===================== server.sh 部署结束 =====================' >> $name.log
echo $current >> $name.log
echo '=============================================================' >> $name.log
mv $name.log ~/xieqing0428.github.io/log/
echo '============================================================='
echo 'SUCCESS  hexo-deploy 完成'
sleep 1
echo 'INFO     server.sh 部署结束'
