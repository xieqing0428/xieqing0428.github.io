'use strict';
const fs = require('fs');
const sizeOf = require('image-size');
try {
    const arr = [];
    //本地照片所在目录
    const originPath = 'source/static';
    //要放置生成的照片信息文件目录，建议直接放在 source/photos/ 文件夹下
    const output = 'source/photos/photoslist.json';
    (function test(path) {
        const files = fs.readdirSync(path);
        if (!files.length) return;
        files.forEach(v => {
            const vPath = path + '/' + v;
            const stats = fs.statSync(vPath);
            if (stats.isFile()) {
                const imgSize = sizeOf(vPath);
                arr.push(imgSize.width + '.' + imgSize.height + ' ' + vPath.replace("source/static/", ''));
            } else {
                test(vPath);
            }
        });
    }(originPath));
    fs.writeFileSync(output, JSON.stringify(arr, null, '\t'));
} catch (err) {
    console.log(err);
}