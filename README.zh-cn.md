# news-ticker
![](https://img.badgesize.io/gaoryrt/news-ticker/master/dist/newsTicker.js.svg)
![](https://img.badgesize.io/gaoryrt/news-ticker/master/dist/newsTicker.js.svg?compression=gzip)

为浏览器加上新闻跑马灯

![](./newstickr.gif)

[English](./README.md) | 简体中文

[在 Codesandbox 上试一试](https://codesandbox.io/s/loving-shannon-tjwfs)

## 语法
```js
const ntInst = new NewsTicker({
  el: document.querySelector('.bar'),
  // 文字跑马灯将在这个元素中展示

  textArr: [],
  // 可选，文字跑马灯显示的文字

  speed: 2,
  // 可选，文字跑马灯滚动的速度，单位是 px

  onLeave: () => {}
  // 可选，一段文字滚出时会调用这个方法，传入参数为这个滚出的文字元素
})

ntInst.add('d')
ntInst.add(['e', 'f'])
// 为实例新增文字，新添加的文字将排在最后滚动播出
```

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

### 样式
```
.line {
  background: #282828
}
.line div {
  color: #FFC324;
  line-height: 28px;
  height: 28px;
}
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
