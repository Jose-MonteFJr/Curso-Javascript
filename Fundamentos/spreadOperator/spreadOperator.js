/** Operador que permite "espalhar" elementos de um array ou propriedades de um objeto em outro lugar
 * Transforma uma estrutura iterável(array, string, objeto) em elementos individuais
 *
 * Finalidade -
 * - Copiar arrays e objetos
 * - Mesclar estruturas de dados
 * - Passar múltiplos valores como argumentos
 * - Evitar mutação de dados
 *
 * Quando usar -
 * - Duplicar dados sem alterar o original
 * - Juntar arrays ou objetos
 * - Atualizar parcialmente um objeto
 * - Trabalhar com imutabilidade(Não alterar os dados originais)
 */

// Copiar arrays

const numeros = [1, 2, 4, 5];

const copiaN = [...numeros];

console.log(numeros); // Original(Não deve alterar, boas práticas da imutabilidade)
console.log(copiaN); // Copia(Pode alterar)
console.log();

// Concatenar arrays

const a = [1, 2];
const b = [3, 4];

const resultado = [...a, ...b];

console.log(resultado);
console.log();

// Copiar objetos

const pessoa = {
  nome: "Larissa",
  idade: 22,
};

const copiaP = { ...pessoa }; // Objeto copiado

console.log(copiaP);
console.log();

// Atualizar objetos

const usuario = {
  nome: "Leo",
  cidade: "Brasilia",
  idade: 31,
};

const usuarioAtualizado = { ...usuario, idade: 42 }; // A copia pode ser atualizada, não alterando a original(boa pratica)

console.log(usuarioAtualizado);
