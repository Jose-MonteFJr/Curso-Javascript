/** Métodos de array: map, filter e reduce
 *
 * São funções usadas para manipular arrays de forma funcional sem alterar o array original
 *
 * map - transformar dados
 * filter - filtrar dados
 * reduce - somar/calcular
 *
 * Recebem funções de callback que serão executadas para cada elemento do array
 *
 */

/** Boas práticas
 *
 * - Sempre usar arrow functions
 * - Usar reduce com valor inicial
 * - Sempre usar return
 *
 */

// map - cria um novo array transformando *cada elemento* do array original, utiliza como parametro o elemento do array

// Ex 01 -

const numeros = [1, 2, 3, 4, 5, 6, 7];

const dobro = numeros.map((numero) => {
  return numero * 2;
});

console.log(dobro); // Para CADA elemento: numero => numero * 2

// Ex 02 -

const usuarios = [
  { nome: "José", idade: 20 },
  { nome: "Leo", idade: 30 },
  { nome: "Alexandre", idade: 45 },
  { nome: "Stefany", idade: 28 },
];

const nomes = usuarios.map((usuario) => {
  return usuario.nome;
});

console.log(nomes);
console.log();

// filter - cria um novo array com base em uma condição(true|false)

// Ex 01 -

const pares = numeros.filter((numero) => {
  return numero % 2 == 0; // Se numero par, entra no array pares
});

console.log(pares);

// Ex 02 -

const pedidos = [{ valor: 350 }, { valor: 80 }, { valor: 150 }];

const pedidosCaros = pedidos.filter((pedido) => {
  return pedido.valor > 100; // Se pedido maior que 100, entra no array pedidosCaros
});

console.log(pedidosCaros);
console.log();

// Reduce - reduz o array em um único valor

// Ex 01 -

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
console.log(soma);

// Ex 02 -

const totalPedidos = pedidos.reduce((acumulador, numero) => {
  return acumulador + numero.valor; // 0 + 350 -> 350 + 80 -> 430 + 150
}, 0);

console.log(totalPedidos);
console.log();

// Simulando banco de dados -

const pedidos2 = [
  { id: 1, valor: 180 },
  { id: 2, valor: 20 },
  { id: 3, valor: 350 },
  { id: 4, valor: 70 },
];

const extrairId = pedidos2.map((pedido) => pedido.id); // Função reduzida, o return está aqui mas não precisa ser declarado

const pedidosMaior100 = pedidos2.filter((pedido) => pedido.valor > 100); // Se valor maior que 100, entra no array

const totalPedidosValor = pedidos2.reduce(
  (acc, pedido) => acc + pedido.valor,
  0,
);

console.log(extrairId);
console.log(pedidosMaior100);
console.log(totalPedidosValor);
