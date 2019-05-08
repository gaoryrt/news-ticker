import { g } from 'gelerator'
const isArr = any => Object.prototype.toString.call(any) === '[object Array]'
const isStr = any => Object.prototype.toString.call(any) === '[object String]'

const isStrArr = any => {
  if (!isArr(any)) return false
  return any.every(isStr)
}

export class NewsTicker {
  constructor({
    el,
    textArr = [],
    speed = 2,
    onLeave = () => {}
  }) {
    this.el = el
    this.textArr = textArr
    this.onLeave = onLeave
    this.elArr = []
    this.speed = speed

    this.start()
  }
  start() {
    const _append = () => {
      const text = this.textArr.shift()
      if (text) {
        const textEl = g({
          style: {
            position: 'absolute',
            'white-space': 'nowrap',
            left: '100%'
          }
        })(text)
        this.el.appendChild(textEl)
        this.elArr.push(textEl)
      }
    }
    const _remove = () => {
      const firstEl = this.el.firstChild
      this.el.removeChild(firstEl)
      this.elArr.shift()
      this.onLeave(firstEl)
    }
    const step = () => {
      const lastEl = this.elArr[this.elArr.length - 1]
      const firstEl = this.el.firstChild
      if (!lastEl) _append()
      else {
        if (lastEl.offsetLeft + lastEl.clientWidth <= this.el.clientWidth) _append()
        if (firstEl && firstEl.offsetLeft + firstEl.clientWidth <= 0) _remove()
      }
      this.elArr.forEach(el => {
        el.style.left = el.offsetLeft - this.speed + 'px'
      })
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  add(textAny) {
    if (isStr(textAny)) this.textArr.push(textAny)
    else if (isStrArr(textAny)) textAny.forEach(text => this.textArr.push(text))
  }
}

export default NewsTicker
