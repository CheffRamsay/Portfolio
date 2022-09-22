const d = document;
const w =  window;

export function preload(){
    const $loader = d.querySelector(".pre-loader");
    const rectangulo = d.querySelectorAll(".rectangulo-animado");
    const boxText = d.querySelector(".rectangulo");
    const boxTextH1 = d.querySelector(".rectangulo h1");
    const $ab = d.querySelector(".about");
    const barraNav = d.querySelector(".menu-container");

    
    function quitarMarginAbout(){
      $ab.style.marginTop = "0px";
      $ab.style.display = "block";

    }

    const addAnimationRectangulo = e =>{
        for (let i = 0; i < rectangulo.length; i++) {
            rectangulo[i].style.animationName = "ring-1";
        }
    }

    w.addEventListener("load", e =>{
        $loader.parentElement.removeChild($loader);
        addAnimationRectangulo();
        boxText.style.animationName = "open-box";
        boxTextH1.style.animationName = "animacion-texto";
        boxTextH1.style.display = "block";
        setTimeout(quitarMarginAbout, 2500); 
        barraNav.style.opacity = "1";
    });
}