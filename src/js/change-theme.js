import { bodyEl, inputEl } from './common';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeAfterPageReload();

inputEl.addEventListener('change', onInputChange);
function onInputChange() {
  if (inputEl.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function themeAfterPageReload() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === null) {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  } else if (savedTheme === Theme.LIGHT) {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  } else if (savedTheme === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    inputEl.checked = true;
  }
}
