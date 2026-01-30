// Destructuring = tirar valores de um objeto ou array e colocar em variáveis

const numeros = [98, 53, 12, 54, 73, 26, 67, 18, 59];

// Utilizando destructuring
const [primeiro, , terceiro, , quinto, ...sobra] = numeros; // ...(rest operator) armazena na variavel "sobra" o resto do array | , - utilizamos para pular valores
console.log(primeiro, terceiro);
console.log(sobra);

// Tradicional
// const primeiro = numeros[0];
// const segundo = numeros[1];
// console.log(primeiro, segundo);

// Array dentro de array
const numeros2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros2;
console.log(lista2[2]);
