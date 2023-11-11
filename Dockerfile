FROM node:alpine AS BUILD_IMAGE

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app .

EXPOSE 3000
CMD ["npm", "start"]
