# 构建镜像: docker build -t docker378928518/safe-password-official .
# 运行镜像: docker run -p 3000:3000 --name safe-password-official -d docker378928518/safe-password-official

FROM node:18.20.0-slim
LABEL Aiden_FE <Aiden_FE@outlook.com>

ENV NODE_ENV production
ENV SKIP_INSTALL_SIMPLE_GIT_HOOKS 1
ENV OFFICIAL_PORT 3000
# SHELL ["/bin/bash", "-c"]

ARG WORKDIR_DIR=/opt

WORKDIR ${WORKDIR_DIR}

# 复制官网资源
COPY ./dist ./www/dist
COPY ./public ./www/public
COPY ./package.json ./www/package.json
COPY ./next.config.mjs ./www/next.config.mjs
COPY ./start.mjs ./www/start.mjs

WORKDIR ${WORKDIR_DIR}/www

EXPOSE ${OFFICIAL_PORT}

CMD ["node", "start.mjs"]
