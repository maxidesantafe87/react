// Variables globales
let estadoFlork_Baile = 'apagado';
let estadoFlork_Comer = 'apagado';
let estadoFlork_Viajar = 'apagado';

let sonidoFlor_baile = document.querySelector('#flork_encendido');
let sonidoFlor_comer = document.querySelector('#sonido_comer');
let sonidoFlor_viajar = document.querySelector('#sonido_viajar');

let flork = document.querySelector('#flork');
let florkBotonBaile = document.querySelector('#baile_boton');
let florkBotonComer = document.querySelector('#comer_boton');
let florkBotonViajar = document.querySelector('#viajar_boton');



// Funciones
function controlarFlork_baile () {
   
    if (estadoFlork_Baile == 'apagado') {
        estadoFlork_Baile = 'encendido';
        flork.classList.add("flork_activo");
    } else {
        estadoFlork_Baile = 'apagado';
        flork.classList.remove("flork_activo");
    }
    controlarFlorkBaile();
}

function controlarFlork_comer () {
   
    if (estadoFlork_Comer == 'apagado') {
        estadoFlork_Comer = 'encendido';
        flork.classList.add("flork_activo_comer");
    } else {
        estadoFlork_Comer = 'apagado';
        flork.classList.remove("flork_activo_comer");
    }
    controlarFlorkComer();
}

function controlarFlork_viajar () {
   
    if (estadoFlork_Viajar == 'apagado') {
        estadoFlork_Viajar = 'encendido';
        flork.classList.add("flork_activo_viajar");
    } else {
        estadoFlork_Viajar = 'apagado';
        flork.classList.remove("flork_activo_viajar");
    }
    controlarFlorkViajar();
}

function controlarFlorkBaile () {
    if (sonidoFlor_baile.paused) {
        sonidoFlor_baile.play();
    } else {
        sonidoFlor_baile.pause();
    }
}

function controlarFlorkComer () {
    if (sonidoFlor_comer.paused) {
        sonidoFlor_comer.play();
    } else {
        sonidoFlor_comer.pause();
    }
}

function controlarFlorkViajar () {
    if (sonidoFlor_viajar.paused) {
        sonidoFlor_viajar.play();
    } else {
        sonidoFlor_viajar.pause();
    }
};

