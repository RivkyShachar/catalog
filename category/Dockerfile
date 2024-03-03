FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod

# Install ts-node-dev globally??
RUN npm install -g ts-node-dev
COPY . .

CMD ["npm", "start"]