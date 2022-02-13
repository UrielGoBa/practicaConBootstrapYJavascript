'use strict'
/*Aqui se borra el contenido*/

let list = [
    { ingles: 'arise', espanol: 'surgir' },
    { ingles: 'arose', espanol: 'surgió' },
    { ingles: 'arisen', espanol: 'surgido' },
    { ingles: 'attach', espanol: 'adjuntar' },
    { ingles: 'attached', espanol: 'adjuntó' },
    { ingles: 'attached', espanol: 'adjuntado' },
    { ingles: 'awake', espanol: 'despertar' },
    { ingles: 'awoke', espanol: 'despertó' },
    { ingles: 'awoke', espanol: 'despertado' },
    { ingles: 'begin', espanol: 'empezar' },
    { ingles: 'begin', espanol: 'comenzar' },
    { ingles: 'began', espanol: 'empecé' },
    { ingles: 'begun', espanol: 'empezado' },
    { ingles: 'begun', espanol: 'comenzado' },
    { ingles: 'bend', espanol: 'doblar' },
    { ingles: 'bent', espanol: 'dobló' },
    { ingles: 'bent', espanol: 'doblado' },
    { ingles: 'bite', espanol: 'morder' },
    { ingles: 'bit', espanol: 'mordió' },
    { ingles: 'bitten', espanol: 'mordido' },
];

let botonReto = document.querySelector(".empezarReto");
let aquiEstaBody = document.querySelector(".todo");
let instrucciones = document.querySelector(".instrucciones");
let contenidoQueAparece = document.querySelector(".contenidoPrincipal");
let puntaje = document.getElementById("pts");
let ptje = 200;

function aparecerPalabra() {/*Aquí se hace aparecer una palabra random para responder el Quiz*/
    if (list.length > 0) {
        let r = Math.floor(Math.random() * (list.length - 0)) + 0;
        let palabraRandom = list[r].espanol;
        let reemplazoTemporal = document.querySelector(".verboRandom");
        reemplazoTemporal.textContent = palabraRandom;
    };
};
function findIndex(pal) {/*Aquí se busca el índice de una palabra ingresada*/
    for (let i = 0; i < list.length; i++) {
        let esp = list[i].espanol;
        let ing = list[i].ingles;
        if ((esp == pal) || (ing == pal)) {
            return i;
        };
    };
};

function comparacion(a, b) {//Aqui se hace una comparación entre 
    if (a = b) {            //el indice [i] de la palabra aparecida en espanol vs
        return true;        //el indice [i] de la palabra aparecida en ingles (la que se ingresa)
    } else {
        return false;
    };
};

function points(upOrDown) {
    if (upOrDown == true) {
        let newPtje = Number(puntaje.innerHTML) + 20;
        puntaje.innerHTML = newPtje;
    } else {
        let newPtje = Number(puntaje.innerHTML) - 20;
        puntaje.innerHTML = newPtje;

    }
};

botonReto.addEventListener("click", function (e) {
    e.preventDefault();
    aquiEstaBody.removeChild(instrucciones);
    contenidoQueAparece.style.display = "block";
    puntaje.innerHTML = ptje;
});

aparecerPalabra();

let botonGris = document.querySelector(".botonGris");

botonGris.addEventListener("click", function (e) {
    e.preventDefault();
    let verboIngresado = document.getElementById("entradaVerbo").value;
    let pal = document.getElementById("verboRandom").textContent;
    let resultado = comparacion(findIndex(pal), findIndex(verboIngresado));
    list.splice(findIndex(pal), 1);
    console.log(resultado);
    console.log(list.length);
    points(resultado);
    aparecerPalabra()
});
