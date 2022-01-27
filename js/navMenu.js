


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
