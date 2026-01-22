// Tudo que tiver dentro do corpo da função(dentro das chaves) está protegido, ou seja, não tem como alterar, excluir e etc

// Função sem parâmetros

function hello() {
  console.log("Hello world!"); // Dentro do corpo da função
}

hello();

// Função com parâmetros - faz a ação mas não retorna nenhum valor
function saudacao(nome) {
  console.log(`Eae ${nome}`);
}

saudacao("Marcos");
saudacao("Juliana");

// Função com parâmetro e return - Retorna um valor que pode ser salvo em uma variável
function multiplicacao(x, y) {
  let resultado = x * y;
  return resultado; // Tudo depois de return é ignorado
}

console.log(multiplicacao(7, 5));

// Podemos adicionar valores padrões para os argumentos
function soma(x = 1, y = 1) {
  let resultado = x + y;
  return resultado;
}

console.log(soma()); // Caso não passe nenhum argumento, irá fazer com os valores padrões
console.log(soma(10, 20)); // Caso passe um argumento, realiza a função normalmente

// Arrow function
const raiz = (n) => n ** 0.5;
console.log(raiz(9));
console.log(raiz(81));
