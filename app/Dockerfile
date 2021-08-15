FROM node:12

# copying all files/folders from the current directory to app directory inside the docker image
COPY . /app

# Setting working directory as app in docker image
WORKDIR /app

RUN npm install
RUN npm install express
RUN npm install mysql

COPY . .

# execute the nc command for checking MySQL server port (a particular host/port) is up or not
RUN apt-get update && apt-get install -y netcat

COPY wait.sh /wait.sh
RUN chmod +x /wait.sh
