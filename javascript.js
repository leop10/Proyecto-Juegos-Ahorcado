String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

//Uso: palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);



const palabras = ["casa", "perro", "gato" , "elefante","moto" , "pollo", "auto", "camion"]

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;

document.querySelector("#output").innerHTML = palabraConGuiones;
document.querySelector("#calcular").addEventListener("click", () =>{
    
   
   const letra = document.querySelector("#letra").value;
    let haFallado = true;
   
    for(const i in palabra){
       if(letra == palabra[i]){
        palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
        haFallado = false;

      }

    }
    
    if(haFallado){
        contadorFallos++;
     document.querySelector("#ahorcado").style.backgroundPosition = -(204*contadorFallos) + "px 0";
      
     if(contadorFallos == 4){
        alert("Perdio el juego,Luser")

     
    } 
}
    else{
        if(palabraConGuiones.indexOf("_") <0){
          document.querySelector("#ganador").style.display = "flex";  
        }
    }

    document.querySelector("#output").innerHTML = palabraConGuiones;
    
    document.querySelector("#letra").value = ""; 
    document.querySelector("#letra").focus();

   });