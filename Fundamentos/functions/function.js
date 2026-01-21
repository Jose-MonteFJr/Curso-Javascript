// Função sem parâmetros

function hello() {
  console.log("Hello world!");
}

hello();

// Função com parâmetros - faz a ação mas não retorna nenhum valor
function saudacao(nome) {
  console.log(`Eae ${nome}`);
}

saudacao("Marcos");
saudacao("Juliana");

// Função com parâmetro e return - não faz nenhuma ação mas retorna um valor que pode ser salvo em uma variável
function saudacaoComReturn(nome) {
  return `Eae ${nome}`;
}

saudacaoComReturn("Otavio"); // Não retorna nada pois não tem ação
const ola = saudacaoComReturn("Otavio");
console.log(ola); // Retorna o valor salvo na variavel
