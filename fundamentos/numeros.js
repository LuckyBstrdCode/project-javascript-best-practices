const numero1 = 30,
    numero2 = 20,
    numero3 = 20.20,
    numero4 = .1020,
    numero5 = -3;

let resultado;

// Suma
resultado = numero1 + numero2;
console.log("Suma: " + resultado);

// Resta
resultado = numero1 - numero2;
console.log("Resta: " + resultado);

// Multiplicacion
resultado = numero1 * 3;
console.log("Multiplicacion: " + resultado);

// Division
resultado = numero1 / numero2;
console.log("Division de : " + resultado);

// Modulo
resultado = numero1 % numero2;
console.log("Modulo de: " + numero1 + " % " + numero2 + " es: " + resultado);

// Pi
resultado = Math.PI;
console.log("PI: " + resultado);

// Numero Absoluto
resultado = Math.abs(numero5);
console.log("Numero Absoluto -3: " + resultado);

// Redondeo
resultado = Math.round(2.4);
console.log("Redondeo Math.round(2.4): " + resultado);

resultado = Math.ceil(2.1);
console.log("Redondeo Math.ceil(2.1): " + resultado);

resultado = Math.floor(2.99);
console.log("Redondeo Math.floor(2.99): " + resultado);

// Raiz Cuadrada
resultado = Math.sqrt(144);
console.log("Raiz Cuadrada Math.sqrt(144): " + resultado);

// Potencia
resultado = Math.pow(8,2);
console.log("Potencia de 8^2: " + resultado);

// Minimo
resultado = Math.min(4,7,9,1,2);
console.log("Minimo de [4,7,9,1,2]: " + resultado);