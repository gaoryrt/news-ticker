import NewsTicker from './newsTicker'

const nt = new NewsTicker({
  el: document.querySelector('.line'),
  textArr: [
    'news ticker in your browser, small and easy'
  ],
  onLeave: el => {
    nt.add(el.innerText.toUpperCase())
  }
})
