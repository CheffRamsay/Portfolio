

const d = document;
const w =  window;

export function preload(){
    const $loader = d.querySelector(".pre-loader");
    const rectangulo = d.querySelectorAll(".rectangulo-animado");
    const boxText = d.querySelector(".rectangulo");
    const boxTextH1 = d.querySelector(".rectangulo h1");
    const $ab = d.querySelector(".about");
    const barraNav = d.querySelector(".c-nav");
    const body = d.querySelector(".c-body");

    
    function quitarOverflow(){
       body.style.overflow = "visible";
    }

    const addAnimationRectangulo = e =>{
        for (let i = 0; i < rectangulo.length; i++) {
            rectangulo[i].style.animationName = "ring-1";
        }
    }

    w.addEventListener("load", e =>{
        console.log("cargando todo")
        $loader.parentElement.removeChild($loader);
        addAnimationRectangulo(); // Agrega la animación "ring-1" en la carga inicial
    
        
        boxText.style.animationName = "open-box";
        boxTextH1.style.animationName = "animacion-texto";
        boxTextH1.style.display = "block";
        //setTimeout(quitarOverflow, 5500);
        barraNav.style.opacity = "1";
        
          
    });


  
}



