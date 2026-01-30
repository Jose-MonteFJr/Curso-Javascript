// É igual a uma função normal, porém mais prática

/** Sintaxe

 (parametros) => {
    codigo
    return resultado;
};

*/

// Função normal

// function somar(x, y) {
//   return x + y;
// }
// console.log(somar(2, 2));

// Arrow functions
// Tradicional

let somar = (a, b) => {
  let somando = a + b;
  return somando;
};

console.log(somar(2, 6));

// 1 parâmetro
const dobrar = (n) => {
  return n * 2;
};

console.log(dobrar(9));

//Return implícito - se tiver apenas uma única linha, retira as {} e o return
const potenciacao = (n) => n ** 2;

console.log(potenciacao(9));

// Return de objetos - o objeto PRECISA estar entre ()
const criarUsuario = (nome) => ({ nome });
let pessoa1 = criarUsuario("João");
console.log(pessoa1.nome);
