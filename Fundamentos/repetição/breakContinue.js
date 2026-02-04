// Continue - Pula a iteração e segue para a próxima
// Útil para ignorar/pular casos específicos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let valor of numeros) {
  if (valor === 3 || valor === 6) {
    continue; // Se a condição for verdadeira, continue é ativado, logo, pula e vai para a próx iteração
  }

  console.log(valor); // 3 e 6 são ignorados
}
console.log();

// Exemplo

const notas = [7, 9, 0, 10, 0, 5, 8, 0, 1];
let soma = 0;

for (let valorNotas of notas) {
  if (valorNotas === 0) {
    continue; // Ignora sempre que a nota for 0
  }
  soma += valorNotas;
  console.log(soma);
}
console.log();

// Break - Para todo o loop na hora
// Útil para parar loops completamente

for (valor of numeros) {
  if (valor === 4) {
    break; // Se for verdadeiro, o loop para imediatamente
  }

  console.log(valor); // Para o loop no 3
}
console.log();

// Exemplo

const idUsuario = [10, 23, 56, 78, 90];

for (let id of idUsuario) {
  if (id === 78) {
    console.log("Usuário encontrado!"); // Após encontrar o usuário, para
    break;
  }
  console.log(id); // id percorridos até chegar no 78
}
