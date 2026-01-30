// Destructuring = tirar valores de um objeto ou array e colocar em variáveis

const criarUsuario = (nome, idade, statusU) => ({
  nome,
  idade,
  ativo: statusU,
});

const user = criarUsuario("Maria", 28, true);

// Utilizando o destructuring
// const { nome, idade, ativo } = user;
// console.log(nome, idade, ativo);

// Tradicional
// const nome = user.nome;
// const idade = user.idade;
// const ativo = user.ativo;
// console.log(nome, idade, ativo);

// ---------------------------------------------

const pessoa1 = {
  nome: "José",
  sobrenome: "Júnior",
  idade: 19,
  endereco: {
    bairro: "Taguatinga",
    numero: 76,
  },
};

// { atributo: variavel } - Utilizar nomes de variaveis diferentes dos atributos
// { variavel = "valor padrão"} - Adicionar valores padrões
const { nome: n = "", sobrenome: x = "" } = pessoa1;
console.log(n, x);

const {
  nome,
  sobrenome,
  endereco: { bairro, numero },
} = pessoa1;
console.log(nome, sobrenome, bairro, numero);
