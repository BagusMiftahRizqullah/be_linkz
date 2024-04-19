FROM node:18.16.0 as build-stage
FROM build-stage as production
ENV NODE_ENV=production
ENV TZ=Asia/Jakarta
WORKDIR /backend-linkz
COPY . /backend-linkz/
RUN npm install -g pnpm
RUN pnpm i
EXPOSE 3333
CMD ["npm", "run", "start"]
