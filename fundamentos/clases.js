class Cliente {

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu salod es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Hola Mundo`;
    }
}

const maria = new Cliente('Maria', 'Perez', 2030);  

console.info(maria.imprimirSaldo());

// Static
console.info(Cliente.bienvenida());



// Heredar clases
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;

    }

    // Sobreescribir
    static bienvenida() {
        return `Hola Mundo para empresas`;
    }
}

const empresa = new Empresa('Empresa1', 5000, 22356334, 'Construccion');

empresa.imprimirSaldo();