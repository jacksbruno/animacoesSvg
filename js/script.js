import { Cards } from './cards.js'
import { Icones } from './icones.js'

window.onload = () => {
  let animacaoCards = new Cards()
  document.addEventListener('scroll',     animacaoCards.calculoScroll.bind(animacaoCards))

  let icones = new Icones()
  icones.animaIcones()
}