const d = document;
const w =  window;

export function animations(){
   const $seccionAbout = d.querySelector("#aboutAnimation");
   const $span = d.querySelectorAll("#span-animation");
   const $spanTxt = d.querySelectorAll(".span-text");
   const $ab = d.querySelector(".about");
   


   function quitarMarginAbout(){
       $ab.style.marginTop = "0px";
   }

   const animationFlickinTransition = (data) =>{
      
        data.style.animationName = "flicker";  
     
      
   } 

    const animationSpanTransition = () =>{
        $span.forEach(e =>{
            e.style.animationName = "open-span";
        })

        $spanTxt.forEach(e =>{
            e.style.animationName = "animacion-texto";
        });
    }

    const io = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.intersectionRatio > 0){
                if(entry.target.id == "about-a"){
                   entry.target.classList.add("animationFlick"); 
                }
                
                if(entry.target.id == "span-id"){
                   entry.target.classList.add("animation-span");  
                }
                
                if(entry.target.id == "span-text-id"){
                    entry.target.classList.add("animation-span-txt");  
                }

                if(entry.target.id == "proyecto-div"){
                    entry.target.classList.add("animationFlick-delay-1");  
                }
              
              
                
            }else{
                
            }
        })
    });

    const boxElList = document.querySelectorAll(".section");

    boxElList.forEach((el) =>{
        io.observe(el);
    })  

/* 
    const $sections = d.querySelectorAll("section[data-scoll-spy]");
    const cargarImagen = (entradas, observador) =>{
      
      entradas.forEach(ent =>{
          const id = ent.target.id;
          if(ent.isIntersecting){
            
         
          console.log(`section[data-scoll-spy][${id}]`);
           
            
          }
      })
    }

    const observador = new IntersectionObserver(cargarImagen, {
       
    });

    $sections.forEach(el => observador.observe(el));
    */
    







   setTimeout(quitarMarginAbout, 2000); 



}


