let numero1 = 20;
let numero2 = 50;
let numero3 = "20";


// convertir string a Number
Number(numero3);

// ó 
parseInt(numero3); // retorna solo decimales
parseFloat(numero3); // retorna con decimales

// return 1
Number(true);

// return 0
Number(false);
Number(null);

// NaN
Number(undefined);
Number('Hello');
Number([1,2,3]);

// toFixed
numero2 = 3534.10034323223
numero2.toFixed()   // 3534
numero2.toFixed(3)   // 3534.100

// convertir de Numero a String
let cp = 20232;
cp = String(cp);

console.info(cp.length);