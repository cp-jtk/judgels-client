FROM nginx:1.27-alpine

WORKDIR /judgels/client

ARG VCS_REF

LABEL org.opencontainers.image.title="judgels-client"
LABEL org.opencontainers.image.source="https://github.com/cp-jtk/judgels-client"
LABEL org.opencontainers.image.revision=$VCS_REF

COPY dist/judgels-client.conf /etc/nginx/conf.d/default.conf
COPY build .
