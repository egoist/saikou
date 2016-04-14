# saikou [![Build Status](https://travis-ci.org/egoist/saikou.svg?branch=master)](https://travis-ci.org/egoist/saikou)

> 700 Random text memes from ACG world

![preview](http://i.imgur.com/0M5XsSA.png)

## Install

```
$ npm install --save saikou
```

## Usage

```js
const saikou = require('saikou')

saikou()
//=> '画面太美我不敢看'

saikou()
//=> '我的麒麟臂又要发作了'

saikou.h()
  .then(remoteMeme => {
    console.log(remoteMeme)
    /*
    {
      hitokoto: '越是锐利的小刀切完东西后就越容易变钝。',
      cat: 'c',
      author: '5454554a@2980.com',
      source: '东方永夜抄',
      like: 2,
      date: '2013.11.12 14:31:22',
      catname: 'Game - 游戏',
      id: 1384237882000
    }
    */
  })
```

## License

MIT © [EGOIST](https://github.com/egoist)
