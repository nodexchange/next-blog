const fs = require('fs')

// In this case, data read from the fs, but it could also be a cached API result.
const data = fs.readFileSync('./server/data/item.json', 'utf8')
const dataShows = fs.readFileSync('./server/data/shows.json', 'utf8')
const dataLaunches = fs.readFileSync('./server/data/launches.json', 'utf8')
const parsedData = JSON.parse(data)
const parsedShowData = JSON.parse(dataShows)
const parsedLaunchesData = JSON.parse(dataLaunches)

function getItem() {
  console.log('Requested Item Data:', data)
  return parsedData
}

function getShows() {
  console.log('Requested Item Data:', data)
  return parsedShowData
}

function getLaunches() {
  console.log('Requested Item Data:', data)
  return parsedLaunchesData
}

function getRobots() {
  const data = fs.readFileSync('./static/robots.txt', 'utf8')
  return data;
}

module.exports = { getItem, getShows, getLaunches }