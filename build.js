const fs = require('fs')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

fetch('http://zh.moegirl.org/Template:%E6%88%90%E5%8F%A5')
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
		fs.writeFileSync('meme.json', JSON.stringify(result, null, 2), 'utf8')
	})
