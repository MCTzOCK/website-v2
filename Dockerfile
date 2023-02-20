FROM node:18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ /usr/src/app/
RUN yarn && yarn build
ENV PORT 3000
EXPOSE 3000
CMD [ "yarn", "start" ]