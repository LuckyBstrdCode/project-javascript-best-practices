let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet; // UTF-8
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList[0];
elemento = document.images;
elemento = document.images[0];
elemento = document.images[0].src;
elemento = document.images[0].getAttribute('src');

// Scripts
elemento = document.scripts;

// Transformar de HTMLCollection a List
let images = document.images;
let imagesArray = Array.from(document.images);

// console.info(elemento);



/*
*   getElementById
*/

let encabezado;

/* 
encabezado = document.getElementById('encabezado').className;
encabezado = document.getElementById('encabezado').textContent;
encabezado = document.getElementById('encabezado').innerText;

    encabezado = document.getElementById('encabezado');
    encabezado.style.background = '#333';
    encabezado.style.color = '#fff';
    encabezado.style.padding = '20px';

    encabezado.textContent = 'Los Mejores Cursos';
    encabezado.innerText = 'Los Mejores Cursos';

// console.info(encabezado);

*/


/*
*   Query Selector
*/



encabezado = document.querySelector('.miClass');        // Clases
encabezado = document.querySelector('h1');              // Elementos
encabezado = document.querySelector('.miClass h1');     // Combinados
encabezado = document.querySelector('#encabezado');     // Id's
encabezado = document.querySelector('#principal a:first-child');     // Ids
encabezado = document.querySelector('#principal a:first-child');     // Ids
encabezado = document.querySelector('#principal a:nth-child(3)');      // Ids
encabezado = document.querySelector('#principal a:nth-child(odd)');      // impares

    // Aplicar CSS
    encabezado = document.getElementById('encabezado');
    encabezado.style.background = '#333';
    encabezado.style.color = '#fff';
    encabezado.style.padding = '20px';


/*
*   Multiples Elementos
*/

let enlaces = document.getElementsByClassName('enlaces');

    // Aplicar CSS
    enlaces = document.getElementById('encabezado');
    enlaces.style.background = '#333';
    enlaces.style.color = '#fff';
    enlaces.style.padding = '20px';


// Query Selector All - Más flexible

enlaces = document.querySelectorAll('#principal a');

/*
*   Combinar metodos
*/

let listaEnlaces = document.querySelector('#principal').getElementsByClassName('.enlace');

let barra = document.querySelector('.barra').children[0].children[0].children;
barra = document.querySelector('.barra').children[0].firstElementChild;
barra = document.querySelector('.barra').children[0].lastElementChild;
barra = document.querySelector('.barra').children[0].childElementCount;



/*
*   Traversing en JavaScript
*/

let navegacion = document.querySelector('#principal');

navegacion.childNodes; // obtiene todos los nodos (etiquetas, espacios en blanco, etc).
navegacion.children; // obtiene todos los elementos (solo etiquetas).
navegacion.children[0].nodeName; // regresa el tipo de etiqueta (h1, a, p)
navegacion.children[0].nodeType; // regresa un numero; 1.- Elementos, 2.- Atributos, 3.- Text Node, 8.- Comentarios, 9.- Documentos, 10.- Doctype


// De hijo a padre

enlaces = document.querySelectorAll('.enlace');

// console.info(enlaces[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);  // Retorna al <body> 

enlaces[4].previousElementSibling   // retorna elemento anterior que se encuentra al mismo nivel

// console.info(enlaces[0].previousElementSibling );  // Si retorno uno antes del primero me retorna null
// console.info(enlaces[0].nextElementSibling );



/*
*   Crear enlace
*/

const encale = document.createElement('a');

//agregamos una clase
encale.className = 'enlace';

// añadir id
encale.id = 'nuevo-id';

// añadir atributo
encale.setAttribute('href','#');

// Añadir texto
encale.appendChild(document.createTextNode('Nuevo enlace'));
encale.textContent = 'Nuevo enlace 2';


document.querySelector('#secundaria').appendChild(encale);




/*
*   Reemplazar elementos
*/

const nuevoEncabezado = document.createElement('h2');

// añadir id
nuevoEncabezado.id = 'encabezado';

// añadir texto
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// Reemplazar el elemento anterior
const anterior = document.querySelector('#encabezado');

// Elemento padre
const elPadre = document.querySelector('#lista-cursos');

// Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);



/*
* Agregando Quitando clases y otro atributos
*/

enlaces = document.querySelectorAll('.enlace');
navegacion = document.querySelector('#principal');

enlaces[0].remove();
navegacion.removeChild(enlaces[2]);



const primerLi = document.querySelector('.enlace');

// Clases CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// Leer elementos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data.id', '20');
elemento = primerLi.hasAttribute('data.id'); // true / false
primerLi.removeAttribute('data.id');

// console.info(elemento);

