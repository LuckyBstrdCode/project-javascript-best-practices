// event listener click al buscador

document.querySelector('#submit-buscador').addEventListener('click', function(e) {
    e.preventDefault();
    console.info('buscando cursos...');
});


document.querySelector('#encabezado').addEventListener('click', function(e) {
    e.target.innerText= 'Nuevo Encabezado';
});





// Variables 
encabezado = document.querySelector('#encabezado');
enlaces = document.querySelector('.enlace');
boton  = document.querySelector('#vaciar-carrito');

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


function obtenerEvento(e) {
    console.info(`EVENTO: ${e.type}`);
}