// While - utilizar quando não souber quantas vezes repete
// Sintaxe -
/**

while (condição) {
    código
    variavel++ 
}

 */
let i = 0;
// Enquanto i for menor ou igual a 5...
while (i <= 5) {
  console.log(`Linha ${i}`);
  i++;
}

const random = (min, max) => {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
};

let rand = random(1, 50);
let contador = 0;
while (rand !== 35) {
  rand = random(1, 50);
  console.log(rand);
  contador++;
}
console.log(`Depois de ${contador} vezes, achei o 35!`);
