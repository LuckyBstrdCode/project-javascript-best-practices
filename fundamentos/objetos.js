// Objeto literal

const cliente = {
    nombre: 'juan',
    saldo: 1200,
    tipo: this.tipoCliente,
    tipoCliente: function () {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

console.info(cliente.tipo);

// Metodo Alternativo

function cliente_v2(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function () {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }

}

const persona = new cliente_v2('Pedro', 2000);




// Otros objetos

const nombre1 = 'Pedro';                // String
const nombre1 = new String('Pedro');    // Objeto

// Numeros
const numero1 = 20;
const numero2 = new Number(20);         // Objeto

// Boolean
const boolean1 = true;
const boolean1 = new Boolean(true);     // Objeto

// Objetos

const persona1 = {
    nombre: 'pedro'
}

const persona2 = new Object({
    nombre: ''
});


// Arrays

const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);




/*
 *  Prototype
 */

    function cliente_v3(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // crear prototype
    cliente_v3.prototype.tipoCliente = function () {
        return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }


// HEREDAR 

    // Banca para empresas
    function Empresa(nombre, saldo, telefono, tipo) {
        cliente_v3.call(this, nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }

    // HEREDAR  PROTOTYPE
    Empresa.prototype = Object.create(cliente_v3.prototype);



/*
 *   OBJECT - PROTOTYPE
 */  
    const Cliente_v4 = {
        imprimirSaldo: function() {
            return `Hola ${this.nombre} tu saldo es ${this.saldo}`;
        },
        retirarSaldo: function(retiro){
            return this.saldo -= retiro;
        }
    }

    // Crear el objeto
    const mary = Object.create(Cliente_v4);
    mary.nombre = 'Maria';
    mary.saldo = 23300;

    mary.retirarSaldo(300);
    mary.imprimirSaldo();