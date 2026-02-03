// For - utilizar quando souber quantas vezes repete
// Tipos de for
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array e object)
// For of - Retorna o valor (array ou strings)

// Sintaxe
/**
for (variavel; condição; incremento) {

} 
 */

for (let i = 0; i <= 10; i++) {
  console.log(`Linha ${i}`);
}
console.log();

// Percorrer array
let frutas = ["Pera", "banana", "kiwi"];

for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// For in -> lê os índices(Array) ou chaves(Object)
// Para arrays e objects
// Sintaxe
/**
for (variavel in array/object) {

}
 */

// Array
frutas = ["Pêra", "Maçã", "Banana", "Abacate"];

for (let i in frutas) {
  console.log(frutas[i]);
}
console.log();

// Objeto
let pessoa = {
  nome: "Otávio",
  sobrenome: "Miranda",
  idade: 30,
};

for (i in pessoa) {
  console.log(i, pessoa[i]);
}
console.log();
// For of -> lê os valores direto de um array
// Para arrays
// Sintaxe
/**
for (variavel of array) {

}
 */

pessoa = ["José", "Leandro", "Natan"];

for (let valor of pessoa) {
  console.log(valor); // Já retorna o valor direto
}
console.log();

// Se fosse com for in

for (let indice in pessoa) {
  console.log(pessoa[indice]); // For in retorna apenas o indice
}
