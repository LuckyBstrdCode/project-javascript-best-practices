import '../css/styles.css'; 
import '../css/styles.scss';

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
}); 

console.log(carrito);

const cliente = (nombreCliente) => nombreCliente;
    
document.querySelector('#cliente').innerHTML = html;
