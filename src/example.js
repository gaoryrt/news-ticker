import NewsTicker from './newsTicker'

const nt = new NewsTicker({
  el: document.querySelector('.line'),
  textArr: [
    'Judd Trump wins the World Snooker Championship, defeating John Higgins in the final.',
    'Aeroflot Flight 1492 crash lands and bursts into flames at Sheremetyevo International Airport, Moscow, killing 41 of the 78 people on board.',
    'In horse racing, Country House wins the Kentucky Derby after Maximum Security, which crossed the line first, is disqualified for interference.',
    'Cyclone Fani hits India and Bangladesh, killing at least 56 people.'
  ],
  onLeave: el => {
    nt.add(el.innerText.toUpperCase())
  }
})
