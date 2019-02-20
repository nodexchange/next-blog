const fs = require('fs')

// In this case, data read from the fs, but it could also be a cached API result.
const data = fs.readFileSync('./server/data/item.json', 'utf8')
const parsedData = JSON.parse(data)

function getItem () {
  console.log('Requested Item Data:', data)
  return parsedData
}

function getRobots() {
  const data = fs.readFileSync('./static/robots.txt', 'utf8')
  return data;
}

module.exports = { getItem }