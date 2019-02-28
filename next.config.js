// next.config.js

const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const compose = require('next-compose')

const imagesConfig = {/** ts config here */}
const sassConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
}

module.exports = compose([
  [withImages, imagesConfig],
  [withSass, sassConfig],
  {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret'
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      // API_URL: process.env.API_URL
      API_URL: process.env.API_URL
    }
  }
])


