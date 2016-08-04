FROM node:4-onbuild
MAINTAINER Alex Karadimos

# Reference from
# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04

RUN cd ~ && \
    curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && \
    sudo bash nodesource_setup.sh && \
    sudo apt-get install build-essential && \

COPY ./ /app
RUN chmod +x /app/bin/www

RUN sudo npm install -g pm2 && \
    pm2 start /app/bin/www

RUN sudo apt-get install nginx && \
    mv ./nginx.conf /etc/nginx/sites-available/default && \
    sudo systemctl restart nginx
