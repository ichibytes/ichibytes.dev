FROM node:alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm prune --production

FROM node:alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app .

EXPOSE 3000
CMD ["npm", "start"]
