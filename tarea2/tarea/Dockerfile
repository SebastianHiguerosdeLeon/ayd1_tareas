FROM node:20-alpine AS builder
# FROM node:20-alpine

WORKDIR /tarea

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.21-alpine AS final

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /tarea/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]