// Crear un arreglo 

const numeros = [10,20,30,40,50,60];

// Arreglo de strings (metodo alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');

// Añadir a un arreglo
meses[4] = 'Mayo';
meses.push('Junio');

//  Añadir al inicio del arreglo
meses.unshift('Mes 0');

// Eleminar elemento de un arreglo
meses.pop();

// Eleminar elemento de un arreglo (el primero)
meses.shift();

// Quitar un rango
meses.splice(2,1);

// Revertir
meses.reverse();

// Concatenar
let arreglo1 =[1,2,3],
    arreglo2 = [7,8,9];

arreglo1.concat(arreglo2);

// Ordenar A-Z
meses.sort();

// Ordenar Numeros
arreglo1 = [1,10,100,21,43,6453,53,32,22];

arreglo1.sort(function(x,y){
    return x-y;
});




