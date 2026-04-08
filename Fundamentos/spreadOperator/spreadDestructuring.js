/**
 * Destructuring - extrair valores de arrays ou objetos e adicionar em variaveis
 *
 * spread(...) - espalhar valores de arrays ou objetos
 *
 * Destructuring + spread - extrair partes de um dado e reconstruir/modificar de forma imutavel
 *
 * Finalidade -
 * - Separar dados de um objeto(Ex: tirar senha)
 * - Atualizar parcialmente objetos
 * - Trabalhar com dados de API(request/response)
 * - Manipular arrays de forma limpa
 *
 */

// Objetos com Destructuring + Spread (ignorar propriedades)

const usuario = {
  id: 1,
  nome: "Moto moto",
  senha: "123",
};

const { senha, ...dadosPublicos } = usuario;
// senha extraiu a senha e dadosPublicos pegou o resto

console.log(dadosPublicos);
console.log();

// Arrays com Destructuring + Spread

const numeros = [1, 2, 3, 4];

const [primeiro, ...resto] = numeros;

console.log(primeiro); // 1
console.log(resto); // [2, 3, 4]
