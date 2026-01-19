let num1 = 200; // Number
let num2 = 53.127361631; // Number

console.log(typeof num1); // Number
console.log(typeof num1.toString()); // Método toString() transforma em Strings

console.log(num1.toString() + num2);
// Em Strings o simbolo + é concatenação por isso junta os valores invés de somar

console.log(num1.toString(2)); // toString(2) tranforma em binário

console.log(num2.toFixed()); // Método toFixed() arredonda o valor
console.log(num2.toFixed(2)); // Podemos escolher quantas casas decimais aparecem

console.log(Number.isInteger(num1)); // Number.isInteger() verifica se o valor é inteiro - true
console.log(Number.isInteger(num2)); // Retorna false pois é número quebrado(float) - false

let temp = num1 * "A";
console.log(temp); // Retorna NaN - Not a Number
console.log(Number.isNaN(temp)); // Number.isNaN() verifica se o valor é um NaN - true
console.log(Number.isNaN(num1)); // Number.isNaN() verifica se o valor é um NaN - false

// inconsistências do JavaScript

// Padrão IEEE 754-2008 para números com casas decimais(quebrados)
let num3 = 0.7;
let num4 = 0.1;
num3 += num4; // num3 = num3 + num4 - teoria 0.80 como resultado
console.log(num3); // 0.7999999999999999 - resultado falso
console.log(num3.toFixed(2)); // 0.80 - resultado falso que engana

// parseFloat() e Number() fazem o mesmo, Number() é melhor

console.log(parseFloat(num3.toFixed(2))); // 0.8 - resultado real verdadeiro
console.log(Number(num3.toFixed(2))); // 0.8 - resultado real verdadeiro

// Utilizar Number(num3.toFixed(2)) quando for calculos muito precisos e pequenos como muitas casas decimais para ter resultados mais precisos
