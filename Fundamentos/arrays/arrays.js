// Arrays são listas onde podemos guardar qualquer tipo de valor
// São indexados, cada elemento corresponde a um índice
// Ex -           0        1        2       3
const alunos = ["José", "Maria", "Lucas", "Renan"];
console.log(alunos); // Retorna toda a array
console.log(alunos[2]); // Retorna o indíce específico

console.log(alunos.length); // .length retorna o tamanho da array

// Podemos adicionar novos valores no array
alunos.push("Juliana"); // .push() adiciona um novo valor ao FINAL da array
console.log(alunos);
console.log(alunos.length);
alunos.unshift("Heitor"); // .unshift adiciona um novo valor no INICIO da array
console.log(alunos);
console.log(alunos.length);

// Podemos editar valores do array
alunos[0] = "Ramon";
console.log(alunos);

// Podemos excluir valores do array
alunos.pop(); // .pop() remove o ÚLTIMO valor da array
console.log(alunos); // "Juliana" foi removida
alunos.shift(); // .shift remove o PRIMEIRO valor da array
console.log(alunos); // "Ramon" foi removido

let removido = alunos.pop(); // Podemos adicionar os valores removidos em variáveis - "Renan" foi removido
console.log(removido); // Mostra o valor removido da array salvo na variável

let removidoArray = [alunos.pop()]; // Podemos adicionar os valores removidos em outro array
console.log(removido);

removidoArray.push(alunos.pop());
console.log(removidoArray);
console.log(alunos);

alunos.push(
  "Alice",
  "Marcos",
  "Wagner",
  "Otávio",
  "Miranda",
  "Leandro",
  "Pablo",
);
console.log(alunos);

console.log(alunos.slice(0, 3)); // .slice fatia e me retorna os valores entre os índices escolhidos

console.log(typeof alunos); // Retorna object
console.log(alunos instanceof Array); // instanceof verifica se faz parte do tipo escolhido
