'use strict'
const fs = require('fs')
const cheerio = require('cheerio')
const fetch = require('isomorphic-fetch')
const lodash = require('lodash')

const fn = (url) => {
  console.log(`fetching ${decodeURIComponent(url)}...`)
  return fetch(url)
    .then(data => data.text())
    .then(data => {
      const $ = cheerio.load(data)
      const result = []
      $('.navbox-list').each(function () {
        const a = $(this).find('a')
        a.each(function () {
          const t = $(this).text()
          result.push(t)
        })
      })
      return result
    })
}

Promise.all([
  fn('https://zh.moegirl.org/Template:ACG%E7%BB%8F%E5%85%B8%E5%8F%B0%E8%AF%8D'),
  fn('https://zh.moegirl.org/Template:ACG%E5%9C%88%E7%94%A8%E8%AF%AD'),
  fn('https://zh.moegirl.org/Template:%E5%A4%A9%E6%9C%9D%E7%BD%91%E7%BB%9C%E6%B5%81%E8%A1%8C%E8%AF%AD%E5%8F%A5')
]).then(result => {
  console.log('writing memes...')
  fs.writeFileSync('meme.json', JSON.stringify(lodash.flatten(result), null, 2), 'utf8')
}).catch(e => console.log(e.stack))
