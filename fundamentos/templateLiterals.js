const producto1 = 'pizza',
    precio1 = 20,
    producto2 = 'hot dog',
    precio2 = 40;

let html;

html = '<ul>' +
    '<li> Orden: ' + producto1 + '</li>' +
    '<li> Precio: ' + precio1 + '</li>' +
    '<li> Orden: ' + producto2 + '</li>' +
    '<li> Precio: ' + precio2 + '</li>' +
    '<li> Total: ' + (precio1 + precio2) + '</li>' +
    '</ul>';

html = `<ul>
    <li> Orden: ${producto1} </li>
    <li> Precio:  ${precio1} </li>
    <li> Orden:  ${producto2} </li>
    <li> Precio:  ${precio2} </li>
    <li> Total: ${precio1 + precio2} </li>
    </ul>`;

document.getElementById('app').innerHTML = html;