<<<<<<< HEAD
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

=======



export function navMenu(){
    const d = document;
    const w = window;

    const $menu = d.querySelector(".menu");
    const hamburBoton = d.querySelector(".hamburger");
    const $enlaces = d.querySelectorAll("enlace-a");
    
    const ToggleAnimationButton = el =>{
      hamburBoton.addEventListener("click", e=>{
        hamburBoton.classList.toggle("is-active");
      });
    }

    ToggleAnimationButton();

    const MenuAbierto = e =>{
     $menu.classList.toggle("traslate-menu");
      
  }
    
  

    d.addEventListener("click", e=>{
      if(e.target.matches(".nodobutton")){
         MenuAbierto();
         
      }
      if(screen.width <= 800){
        if(e.target.matches(".enlace-a")){
          MenuAbierto();
          hamburBoton.classList.toggle("is-active");
        }
      }
    })
    
}
>>>>>>> 0f57479ca5d3c5faa1a1c90fd40e94ebeb832e8a
