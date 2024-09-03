FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN corepack enable
RUN pnpm install

COPY prisma ./
COPY . .

RUN npx prisma generate


RUN pnpm build
ENV NODE_ENV=production

EXPOSE 8080
CMD ["node", "dist/index.js"]
USER node