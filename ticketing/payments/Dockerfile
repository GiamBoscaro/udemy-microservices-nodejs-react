FROM node:21.7-alpine

WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .

CMD ["npm", "run", "start:docker"]