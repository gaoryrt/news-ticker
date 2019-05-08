# news-ticker
> 文字跑马灯

![](https://img.badgesize.io/gaoryrt/news-ticker/master/dist/newsTicker.js)
![](https://img.badgesize.io/gaoryrt/news-ticker/master/dist/newsTicker.js?compression=gzip)

[English](./README.md) | 简体中文

<!-- [在 codepen 上试试 demo]() -->

## 语法
```js
const ntInst = new NewsTicker(options)
ntInst.add(textParam)
```

### 参数详解
**`options`**
`对象`


`options.el`
`元素`
文字跑马灯将在这个元素中展示


`options.textArr`（可选，默认为`[]`）
`字符串数组`
文字跑马灯显示的文字


`options.speed`（可选，默认为`2`）
`数字`
文字跑马灯滚动的速度，单位是 px


`options.onLeave`（可选）
`方法`
一段文字滚出时会调用这个方法，传入参数为这个滚出的文字元素


**`textParam`**
`字符串数组` 或 `字符串`
为实例新增文字，新添加的文字将排在最后滚动播出

## 如何使用
### 安装
[![NPM](https://nodei.co/npm/news-ticker.png?compact=true)](https://nodei.co/npm/news-ticker/)
或者 `yarn add news-ticker`

### import
```javascript
import NewsTicker from 'news-ticker'
```

### 跑起来
```javascript
const nt = new NewsTicker({
  el: $('.line')
})
nt.add('hello world')
```

## License
MIT

## 开发
1. 安装开发依赖: `yarn`
2. 开始开发: `yarn dev`
3. 打包: `yarn build`

## 贡献代码
1. Fork 这个项目
2. 为新功能新建分支: `git checkout -b MY-NEW-FEATURE`
3. Commit: `git commit -am 'ADD SOME FEATURE'`
4. Push: `git push origin MY-NEW-FEATURE`
