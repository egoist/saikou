var unique = require('unique-random-array')
var fetch = require('isomorphic-fetch')
var meme = require('./meme')

module.exports = unique(meme)
module.exports.meme = meme
module.exports.h = h

function h() {
  return fetch('http://api.hitokoto.us/rand')
    .then(data => data.json())
}
