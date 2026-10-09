FROM node:20-alpine

WORKDIR /opt/application

ENV NODE_ENV=production
ENV PORT=8000

COPY package*.json ./
RUN npm ci --omit=dev

COPY server.js ./
COPY public ./public
COPY run.sh ./

RUN chmod 755 /opt/application/run.sh

EXPOSE 8000

CMD ["/opt/application/run.sh"]
