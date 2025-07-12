# Etapa 1: construir a aplicação
FROM node:21 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servidor NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/freneticos/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
