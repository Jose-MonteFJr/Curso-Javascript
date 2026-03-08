/**
 function dobro(n) {
  return n * 2;
}
 */

const dobro = (n) => n * 2;
console.log(dobro(9));

const triplo = (n) => n * 3;
console.log(triplo(7));

const soma = (x, y) => x + y;
console.log(soma(2, 2));

const par = (n) => n % 2 === 0;
console.log(par(1));

const usuario = (nome, idade, ativo) => ({ nome, idade, ativo: true });
console.log(usuario("João", 19));
let user = usuario("Renan", 29);
console.log(user.nome);
