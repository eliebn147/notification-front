FROM node:20-alpine AS build

WORKDIR /usr/local/app

COPY package.json .
COPY package-lock.json .
RUN npm install --ignore-scripts

COPY . .

ARG CONFIGURATION=production
RUN npm run build -- --configuration=${CONFIGURATION}

# Copy env.js.template to known location inside build stage
COPY src/assets/env.js.template /usr/local/app/env.js.template


FROM nginx:1.28.0-alpine

COPY nginx/default.conf /etc/nginx/conf.d/
RUN echo 'server_tokens off;' > /etc/nginx/conf.d/server_tokens.conf
COPY nginx/nginx.conf /etc/nginx/

# Copy built Angular app
COPY --from=build /usr/local/app/dist/notification-front/browser /usr/share/nginx/html

# Copy env.js.template from build stage
COPY --from=build /usr/local/app/env.js.template /usr/share/nginx/html/assets/env.js.template

EXPOSE 80

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.js.template > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
