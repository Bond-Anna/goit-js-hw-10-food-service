import { bodyEl, inputEl } from './common';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// bodyEl.classList.add('Theme.LIGHT');

inputEl.addEventListener('change', onInputChange);
function onInputChange(event) {
  if (inputEl.chacked) {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
