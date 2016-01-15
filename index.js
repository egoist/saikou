var unique = require('unique-random-array')
var meme = require('./meme')

module.exports = unique(meme)
module.exports.meme = meme
