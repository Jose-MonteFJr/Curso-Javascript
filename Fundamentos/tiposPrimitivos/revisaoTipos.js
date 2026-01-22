/**
 *Primitivos(imutáveis) - String, number, boolean, undefined, null, symbol, bigint - valoes copiados
 *
 *Referência(mutáveis) - function, array e object - ambos apontam para o mesmo lugar na memoria
 *
 */

let a = "A";
let b = a; // b está copiando o valor de a
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

let c = [1, 2];
let d = c; // d aponta para o mesmo lugar na memória que c
let e = [...d]; // ... para copiar o valor e não apontar para o mesmo lugar na memoria
console.log(c, d);

c.push(3);
console.log(c, d);

console.log(c);
console.log(e);
