# Etapa 1: construir a aplicação
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration=production

# Etapa 2: servidor NGINX
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/freneticos /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
