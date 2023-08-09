FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh
RUN chmod 755 -R /etc/nginx

ENV LANG C.UTF-8
ENV APP_FREE_FONT_BASE_API https://wordshub.github.io/free-font/

EXPOSE 80
VOLUME [ "/etc/nginx" ]
ENTRYPOINT [ "/entrypoint.sh" ]
