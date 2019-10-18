import headerView from './views/headerView';
import menuView from './views/menuView';
import navView from './views/navView';
import showcaseView from './views/showcaseView';

const base = document.querySelector('#content');

base.insertAdjacentHTML('beforebegin', navView);
base.insertAdjacentHTML('beforeend', headerView);

const clearPrevView = () => {
  base.innerHTML = '';
};

const handleClick = (e) => {
  clearPrevView();
  switch (e.target.id) {
    case 'home__btn':
      base.insertAdjacentHTML('beforeend', headerView);
      break;
    case 'brand__btn':
      base.insertAdjacentHTML('beforeend', headerView);
      break;
    case 'menu__btn':
      base.insertAdjacentHTML('beforeend', menuView);
      break;
    case 'showcase__btn':
      base.insertAdjacentHTML('beforeend', showcaseView);
      break;
    default:
      break;
  }
};

window.addEventListener('click', handleClick);
