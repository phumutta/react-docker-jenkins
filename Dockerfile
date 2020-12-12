# # base image
# FROM node:8.11-alpine

# # set working directory
# RUN mkdir -p  /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# #ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# #COPY package.json /usr/src/app/package.json
# COPY . /usr/src/app


# RUN npm install
# RUN npm install react-scripts -g

# # start app
# CMD ["npm", "start"]
FROM node:12.20.0-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install 


COPY . /usr/src/app
EXPOSE 3000

RUN  npm install

CMD ["npm","start"]