FROM node:lts AS builder
ENV NODE_ENV production
WORKDIR /app

# Cache deps
COPY package.json .
COPY package-lock.json .
RUN npm install --production

# Copy and build
COPY . .
RUN npm run build

# Host compiled files with nginx
FROM nginx:mainline-alpine as production
EXPOSE 80
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
#RUN rm /etc/nginx/conf.d/default.conf

#VOLUME [ "/etc/nginx/conf.d/default.conf" ]
#VOLUME [ "/etc/nginx/conf.d/htpasswd.key" ]

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
