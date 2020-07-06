FROM node

EXPOSE 3000

ADD . weather
WORKDIR weather
RUN npm install
RUN npm run compile
CMD npm start

