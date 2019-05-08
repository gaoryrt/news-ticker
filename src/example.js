import NewsTicker from './newsTicker'

const nt = new NewsTicker({
  el: document.querySelector('.line'),
  textArr: [
    'lorem',
    'Lorem dolor.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, officia!',
    'Lorem dolor sit amet, adipisicing elit. Iusto repellendus dolorum expedita doloribus aut inventore?'
  ],
  onLeave: el => {
    nt.add(el.innerText.toUpperCase())
  }
})
