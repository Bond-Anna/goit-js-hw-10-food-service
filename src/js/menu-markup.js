import { menuEl } from './common';
import menuCardsTpl from '../tamplates/menu-cards.hbs';
import menu from './menu.json';

const menuCardsMarkup = creatMenuCardsMarkup(menu);
function creatMenuCardsMarkup(menu) {
  return menuCardsTpl(menu);
}
console.log(menuCardsTpl(menu));
menuEl.insertAdjacentHTML('beforeend', menuCardsMarkup);
