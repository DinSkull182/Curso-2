let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;
condicionesIniciales();

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p',`¡Eso es! Descubriste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        limpiarCaja();
        intentos++;
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p',`El numero secreto es menor que ${numeroDeUsuario}`);
        }else{
            asignarTextoElemento ('p',`El numero secreto es mayor que ${numeroDeUsuario}`);
        }   
    }
    
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;    
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(numeroMaximo == listaNumerosSorteados.length){
        asignarTextoElemento('h1','¡F E L I C I D A D E S!,Ya se asignaron todos los numeros posibles');
        return
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    // si el numero generado está incluido en la lista generar numero nuevo
    
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);    
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();    
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

