// event listener click al buscador

document.querySelector('#submit-buscador').addEventListener('click', function (e) {
    e.preventDefault();
    console.info('buscando cursos...');
});


document.querySelector('#encabezado').addEventListener('click', function (e) {
    e.target.innerText = 'Nuevo Encabezado';
});





// Variables 
encabezado = document.querySelector('#encabezado');
enlaces = document.querySelector('.enlace');
boton = document.querySelector('#vaciar-carrito');

// Click
boton.addEventListener('click', obtenerEvento);

// Doble click
boton.addEventListener('dblclick', obtenerEvento);

// Mouse Enter
boton.addEventListener('mouseenter', obtenerEvento);

// Mouse Leave
boton.addEventListener('mouseleave', obtenerEvento);

// Mouse Over
boton.addEventListener('mouseover', obtenerEvento);

// Mouse Out
boton.addEventListener('mouseout', obtenerEvento);

// Mouse down
boton.addEventListener('mousedown', obtenerEvento);

// Mouse up
boton.addEventListener('mouseup', obtenerEvento);

encabezado.addEventListener('mousemove', obtenerEvento);



// input
busqueda = document.querySelector("#buscador");

busqueda.addEventListener('keydown', obtenerEvento);
busqueda.addEventListener('keyup', obtenerEvento);
busqueda.addEventListener('keypress', obtenerEvento);
busqueda.addEventListener('focus', obtenerEvento);
busqueda.addEventListener('blur', obtenerEvento);
busqueda.addEventListener('cut', obtenerEvento); // cortar
busqueda.addEventListener('copy', obtenerEvento); // copiar
busqueda.addEventListener('paste', obtenerEvento); // pegar
busqueda.addEventListener('input', obtenerEvento); // all
busqueda.addEventListener('change', obtenerEvento); // all

function obtenerEvento(e) {
    console.info(`EVENTO: ${e.type}`);
}




/*
 *   Event Bubbling
 */

// const card = document.querySelector(".card");
// const infoCurso = document.querySelector(".info-card");
// const agregarCarrito = document.querySelector(".agregar-carrito");

// card.addEventListener('click', function (e) {
//     console.info('click en Card');
//     e.stopPropagation();
// });

// infoCurso.addEventListener('click', function (e) {
//     console.info('click en Info curso');
//     e.stopPropagation();
// });

// agregarCarrito.addEventListener('click', function (e) {
//     console.info('click en Agregar a Carrito');
//     e.stopPropagation();
// });





/*
 * Delegation
 */

document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar-curso')) {
        console.info('Si');
        e.target.parentElement.parentElement.remove();
    } else {
        console.info('No!');
    }

    if (e.target.classList.contains('agregar-carrito')) {
        console.info('Curso Agregado');
    } 
}