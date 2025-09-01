// Some dois numeros digitados atraves do prompt 

let num1 = prompt(`Digite um numero: `);
let num2 = prompt(`Digite outro numero`);
const resultado = Number(num1) + Number(num2); // Convertendo as strings para Number

alert(`A soma dos números é: ${resultado}`); // Template strings