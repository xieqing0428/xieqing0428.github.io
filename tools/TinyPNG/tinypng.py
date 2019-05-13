#!/usr/bin/env python3
# coding=utf-8

# from os.path import dirname
import os
import sys
import getopt
import random
from urllib.request import Request, urlopen
from base64 import b64encode
from multiprocessing import Pool

poolLimite = 10
key = "wXfMMN5eQMY1V96y3SMtRE50PMDFy1Ao"
# input = "large-input.png"
# output = "tiny-output.png"
opts, args = getopt.getopt(sys.argv[1:], "hi:o:r:")
input_doc_path = ""
output_doc_path = ''
filePaths = []

for op, value in opts:
    if op == "-i":
        input_doc_path = value
        print("Notice: Up to 20 images, max 5MB each!")
    elif op == "-o":
        output_doc_path = value
    elif op == "-r":
        input_doc_path = value
        output_doc_path = value
        print("Notice: Up to 20 images, max 5MB each!")
    elif op == "-h":
        print('''
        使用方法 python3 tinypng.py -i picDocPath -o outputDocPath
        -o 参数可以为空，默认存在picDocPath/tinypng 内
        去 https://tinypng.com/developers 申请自己的key 每key每月免费压缩500个图
        默认并发数为10 可以自己调整''')


def getTinyPng(filePath):
    print('BEGIN -> '+filePath)
    request = Request("https://api.tinify.com/shrink",
                      open(filePath, "rb").read())

    cafile = None
    # Uncomment below if you have trouble validating our SSL certificate.
    # Download cacert.pem from: http://curl.haxx.se/ca/cacert.pem
    # cafile = dirname(__file__) + "/cacert.pem"

    auth = b64encode(bytes("api:" + key, "ascii")).decode("ascii")
    request.add_header("Authorization", "Basic %s" % auth)

    response = urlopen(request, cafile=cafile)
    if response.status == 201:
        # Compression was successful, retrieve output from Location header.
        result = urlopen(response.getheader("Location"), cafile=cafile).read()

        output = os.path.join(
            output_doc_path, os.path.relpath(filePath, input_doc_path))
        open(output, "wb").write(result)
        print('SUCCESS -> '+output)
    else:
        print('FAIL -> '+filePath)
        # Something went wrong! You can parse the JSON body for details.
        print("Compression failed")


def main():
    global output_doc_path
    if output_doc_path == '':
        output_doc_path = os.path.join(
            os.path.split(input_doc_path)[0], 'outputTinypng')
    if not os.path.exists(output_doc_path):
        os.mkdir(output_doc_path)

    # 三个参数：分别返回1.父目录 2.所有文件夹名字（不含路径） 3.所有文件名字
    for parent, dirnames, filenames in os.walk(input_doc_path):
        for dirname in dirnames:  # 输出文件夹信息
            # print("parent is:" + parent)
            # print("dirname is" + dirname)
            outDir = os.path.join(output_doc_path, os.path.relpath(
                os.path.join(parent, dirname), input_doc_path))
            if not os.path.exists(outDir):
                os.mkdir(outDir)
        for filename in filenames:  # 输出文件信息
            # print("parent is:" + parent)
            # print("filename is:" + filename)
            filename, ext = filename.split(".")
            filename = filename + "." + ext.lower()
            filePaths.append(os.path.join(parent, filename))

    # 三个参数：分别返回1.父目录 2.所有文件夹名字（不含路径） 3.所有文件名字
    for parent, dirnames, filenames in os.walk(output_doc_path):
        for filename in filenames:  # 输出文件信息
            # print("parent is:" + parent)
            # print("filename is:" + filename)
            filename, ext = filename.split(".")
            filename = filename + "." + ext.lower()
            filePath_old = os.path.relpath(os.path.join(parent, filename), output_doc_path)
            """如果已经压缩了，就不再压缩"""
            filePaths.remove(os.path.join(input_doc_path, filePath_old))

    pngFilePaths = filter(lambda x: os.path.splitext(x)[1] == '.png' or os.path.splitext(x)[1] == '.jpg' or os.path.splitext(x)[1] == '.gif', filePaths)
    print('Parent process %s.' % os.getpid())
    p = Pool(poolLimite)
    if len(filePaths) == 0:
        print("No one for subprocesses")
    else:
        for fileName in pngFilePaths:
            p.apply_async(getTinyPng, args=(fileName,))
        print('Waiting for all subprocesses done...')
    p.close()
    p.join()

def clean():
    global output_doc_path
    count = 0
    for parent, dirnames, filenames in os.walk(output_doc_path):
        for filename in filenames:  # 输出文件信息
            # print("parent is:" + parent)
            # print("filename is:" + filename)
            if filename == '.DS_Store':
                filepath = os.path.join(parent, filename)
                os.remove(filepath)
                count += 1
    if count == 0:
        print('INFO  source/static/目录下没有.DS_Store文件')
    else:
        print('INFO  已删除source/static/目录下' + str(count) + '个.DS_Store文件')

if __name__ == '__main__':
    if os.path.isdir(input_doc_path):
        main()
        clean()
