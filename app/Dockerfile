FROM node:17-slim

# RUN addgroup app && adduser -S -G app app
# RUN mkdir /app && chown app:app /app
# USER app
RUN apt-get update
#RUN apt-get update \
#&& apt-get install -y build-essential

WORKDIR /app/

COPY package.json package-lock.json /app/

#RUN npm ci --silent
RUN npm i

COPY . .

CMD npm run live-reload

#docker exec -it b25b2469a8b6 bash