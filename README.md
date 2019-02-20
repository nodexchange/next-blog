# next-blog
2019 keystonejs next.js graphql react and react-redux

# stack
## Front-end
react
react-redux

## Back-end

Webpack 4
next.js
graphql
+ socket.io
+ redis
+ mongodb
+ docker

## Testing
mocha jest enzyme

## CI
travis (https://travis-ci.com/nodexchange/next-blog)

# personal project for the upskilling


#Docker commands: 

##BUILD 
# build
docker build -t next-app .
# or, use multi-stage builds to build a smaller docker image
docker build -t next-app -f ./Dockerfile.multistage .
##RUN
docker run --rm -it \
  -p 3000:3000 \
  -e "API_URL=https://example.com" \
  next-app
