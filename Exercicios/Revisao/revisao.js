// 1 - Escreva uma função que receba 2 números e retorne o maior deles

const maior = (x, y) => Math.max(x, y);

console.log(maior(17, 9));
console.log();

// 2 - Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem, retorne true se a imagem estiver no modo paisagem

const ePaisagem = (l, a) => l > a;
console.log(ePaisagem(1850, 750));
console.log();
/** 3 - Escreva uma função que receba um número e retorne o seguinte -
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO É divisível por 3 e 5 = Retorna o próprio número
 * Checar se realmente é um número = Retorna o próprio número
 * Use a função com números de 0 a 100
 * */

const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (!(n % 3 === 0) && !n % 5 === 0) {
    return n;
  } else if (Number.isNaN(n)) {
    return n;
  }
};

for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    continue;
  }
  console.log(fizzBuzz(i));
}
