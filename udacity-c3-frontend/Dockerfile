<<<<<<< HEAD
FROM beevelop/ionic AS ionic
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN ionic build
FROM nginx:alpine
COPY --from=ionic /usr/src/app/www /usr/share/nginx/html
=======
## Build
FROM beevelop/ionic AS ionic
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
RUN ionic build

## Run 
FROM nginx:alpine
#COPY www /usr/share/nginx/html
COPY --from=ionic  /usr/src/app/www /usr/share/nginx/html

>>>>>>> 13942c4c9f0a7b77fb912411388e70ddc20b085b
