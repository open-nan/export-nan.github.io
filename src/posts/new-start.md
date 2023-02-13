---
title: vuepress + Github CD 搭建自动化的集成的博客发布栈
tag: 
    - vuepress 
    - markdown
category:
    - 博客维护
# 这是页面的图标
icon: page
# 这是侧边栏的顺序
order: 1
# 设置作者
author: NAN
# 设置写作时间
date: 2023-02-13
# 此页面会在文章列表置顶
sticky: true1
# 此页面会出现在文章收藏中
star: true

# 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。
# 导航栏
# navbar: false
# 侧边栏
# sidebar: false
# 路径导航
# breadcrumb: false
# 页面信息
# pageInfo: false
# 贡献者
# contributors: false
# 编辑此页链接
# editLink: false
# 更新时间
# lastUpdated: false
# 上一篇/下一篇 链接
# prev: false
# next: false
# 评论
# comment: false
# 页脚
# footer: false
# 返回顶部按钮
# backtotop: false
---

# 一个新的开始

## 站点技术选型

技术栈

- markdown   
- vuepress  
- Github pase
- Github CD

思路：博客文档部分采用 markdown 进行编写，使用 vuepress 进行静态文件编译，采用 vuepress-theme-hope 进行主题开发，借助 Github CD 进行自动化部署。

为什么是markdown？ 拜托！markdown 是真的很好用好吧，我真的爱死mardown了_(:з」∠)_

采用vuepress编译为静态文件的好处: 这样我们不用考虑博客后端与API交互部分落脚，只用专注于文档编写，vuepress会帮我搞定一切，并且因为最终编译为了静态文件这便于了我们网站在SEO方面的优化，最后我们只要配置好我们的Github我们就可以很方便的对我们的博客内容进行推送


## 源码地址
Github URl: [*https://github.com/export-nan/nan-blogs*](https://github.com/export-nan/nan-blogs)

## 技术栈相关

Github pase: [https://docs.github.com](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

vuepress: [https://v2.vuepress.vuejs.org/zh/](https://v2.vuepress.vuejs.org/zh/)

vuepress-theme-hope: [https://theme-hope.vuejs.press/zh/](https://theme-hope.vuejs.press/zh/)

markdown: [markdown 教程](https://commonmark.org/help/)