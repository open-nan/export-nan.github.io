# docker 镜像配置
FROM nginx
# nginx.conf
COPY nginx.conf /etc/nginx/conf.d/nan-blogs.conf
# 静态文件
COPY ./src/.vuepress/dist /usr/share/nginx/html/nan-blogs
