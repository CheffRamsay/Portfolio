// navMenu.js
export function navMenu() {
  const menu = document.querySelector('#menu-icon');
  const close = document.querySelector('#close-icon');
  const nav = document.querySelector('.c-nav__ul');
  

  menu.onclick = () => {
    // Al hacer clic en las líneas (hamburguesa), se muestra el menú y cambia a la "X"
    menu.classList.toggle('u-display-none');
    close.classList.toggle('u-display-none');
    nav.classList.toggle('open');
  }
  
  close.onclick = () => {
    // Al hacer clic en la "X" (cruz), se oculta el menú y cambia a las líneas (hamburguesa)
    menu.classList.toggle('u-display-none');
    close.classList.toggle('u-display-none');
    nav.classList.toggle('open');
  }

  nav.onclick = () => {
    menu.classList.toggle('u-display-none');
    close.classList.toggle('u-display-none');
    nav.classList.toggle('open');
  }
  
}

