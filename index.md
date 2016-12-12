---
layout: home
title: XMUED &middot; 熊猫金库用户体验中心
---
<link href="./webhook/css/webhook.css" rel="stylesheet">
<script src="./webhook/js/main.js"></script>

XMUED 是熊猫镇的 HTML、CSS 和 JS 框架，用于开发熊猫镇旗下熊猫金库等 WEB 项目。XMUED文档使用 Jekyll + SASS 架构。

## 目录

* 目录
{:toc}

## XMHOOK

### Redmine

<div class="w-group" id="redmine"></div>
    
### Merge Request

<div class="w-group" id="merge"></div>

### Webhook
    
<div class="w-group" id="webhook"></div>

## XMUED环境配置

### nodejs安装

```sh
$ brew install node
```

### jekyll全局安装

```sh
$ gem install jekyll
```

`Jekyll`是一个简单的博客形态的静态站点生产机器。它有一个模版目录，其中包含原始文本格式的文档，通过 `Markdown` （或者 Textile） 以及 `Liquid` 转化成一个完整的可发布的静态网站，你可以发布在任何你喜爱的服务器上。Jekyll 也可以运行在 GitHub Page 上，也就是说，你可以使用 GitHub 的服务来搭建你的项目页面、博客或者网站，而且是完全免费的。

[Jekyll文档](http://jekyll.bootcss.com/docs/home/) [Liquid教程](http://blog.csdn.net/dont27/article/details/38097581)

### 安装本地包,包功能详解:

- **gulp** 前端打包框架
- **gulp-sass** sass编译
- **gulp-autoprefixer** sass编译增加兼容前缀
- **gulp-zip** zip打包
- **gulp-sourcemaps** sass编译增sourcemaps方便调试
- **browser-sync** 编译结束自动刷新浏览器

```sh
$ npm install
```

### 启动XMUED调试

```sh
$ gulp
```

### 服务端自动部署

接口

```sh
fanshu.xiongmaojinku.com/ui
```

> [Webhook]接到master的push指令后自动部署

#### 启动webhook

> 使用screen常驻进程

```sh
$ screen -S webhook
$ node webhook.js & 
# command + A && command + D 退出窗口

$ screen -r webhook
# 召回窗口

$ ps | grep node 
# 查看进程

$ kill node 
# 结束进程
```

### [过期|已切换成自动部署]服务端打包

```sh
$ git checkout . && git pull && gulp build
```


### SASS

从功能出发，Sass较LESS略强大一些，LESS用的稍微深入一点你就会发觉它hold不住了。自定义函数不支持，运算符也少的可怜，还用坑爹的css关键字@符声明变量。目前 Bootstarp 4 也已经从LESS全面改用SCSS。

[SASS用法指南](http://www.sass.hk/sass-course.html)


---


## 熊猫金库APP 版本获取

### iOS

>**蒲公英测试版：**[下载地址](http://www.pgyer.com/PandaCashBox)
>
>**AppStore正式版：**[itunes.apple.com/cn/app/id1092412888](https://itunes.apple.com/cn/app/id1092412888)

### Android

>**蒲公英测试版：**[下载地址](http://www.pgyer.com/ONEl)
>
>**应用宝正式版：**[a.app.qq.com/o/simple.jsp?pkgname=com.xmzhen.cashbox](http://a.app.qq.com/o/simple.jsp?pkgname=com.xmzhen.cashbox)