const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender', 'JavaScript'];

// forEach 
pendientes.forEach(function(pendiente, index){
    console.info(`${index}: ${pendiente}`);
})

console.info(pendientes);

// map
const carrito = [
    {id:1, producto: 'Libro'},
    {id:2, producto: 'Camisa'},
    {id:3, producto: 'Guitarra'},
    {id:4, producto: 'Disco'},
];

const nombreProducto = carrito.map(function(item){
    return item.producto;
});


console.info(nombreProducto);

// for in
const automovil = {
    modelo: 'camaro',
    motor: 6.1,
    anio: 1968
}

for(let auto in automovil){
    console.info(`${auto}: ${automovil[auto]}`);
}

