# news-ticker
> news ticker in your browser

![](https://img.badgesize.io/gaoryrt/news-ticker/master/dist/newsTicker.js.svg)
![](https://img.badgesize.io/gaoryrt/news-ticker/master/dist/newsTicker.js.svg?compression=gzip)

English | [简体中文](./README.zh-cn.md)

## Syntax
```js
const ntInst = new NewsTicker(options)
ntInst.add(textParam)
```

### Parameters
**`options`**
`Object`


`options.el`
`Element`
news ticker would display in this el


`options.textArr`（optional, default is `[]`）
`Array of String`
string to be shown in news ticker


`options.speed`（optional, default is `2`）
`Number`
speed of scrolling, in `px`


`options.onLeave`（optional）
`Function`
would trigger when some text scroll out of the screen


**`textParam`**
`Array of String` or `String`
push some string to the end of Queue


## How to use
### install
[![NPM](https://nodei.co/npm/news-ticker.png?compact=true)](https://nodei.co/npm/news-ticker/)
or `yarn add news-ticker`

### import
```javascript
import NewsTicker from 'news-ticker'
```

### use it
```javascript
const nt = new NewsTicker({
  el: $('.line')
})
nt.add('hello world')
```

## License
MIT

## Dev
1. install all the dev dependencies: `yarn`
2. dev: `yarn dev`
3. package: `yarn build`

## contributing
1. Fork this repo
2. Create your feature branch: `git checkout -b MY-NEW-FEATURE`
3. Commit your changes: `git commit -am 'ADD SOME FEATURE'`
4. Push to the branch: `git push origin MY-NEW-FEATURE`
5. Submit a pull request :D
