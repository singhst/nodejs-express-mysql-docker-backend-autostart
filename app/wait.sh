#!/bin/sh

# waiting for the MySQL server to be startup before starting the Nodejs app
while ! nc -z db 3306 ; do
    echo "Waiting for the MySQL Server"
    sleep 3
done

node app.js
