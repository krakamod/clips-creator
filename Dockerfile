# Step 1: Build stage
FROM node:18.15.0-alpine3.16 as build-stage

WORKDIR /app
COPY package.json yarn.lock ./
COPY .yarn ./.yarn
RUN yarn set version berry
RUN yarn
COPY . .
RUN yarn build

# Step 2: Production
FROM nginx:1.23.4-alpine

COPY .nginx /etc/nginx
RUN rm /etc/nginx/conf.d/default.conf

# add permissions
RUN chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid

# switch to non-root user
USER nginx

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
