FROM node 
LABEL name = "vue-back"
LABEL version = "1.0"
COPY . /app
WORKDIR /app
RUN nmp install
EXPOSE 3000
CMD npm start
