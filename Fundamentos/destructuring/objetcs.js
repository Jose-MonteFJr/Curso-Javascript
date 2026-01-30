// Destructuring = tirar valores de um objeto ou array e colocar em variáveis

const criarUsuario = (nome, idade, statusU) => ({
  nome,
  idade,
  ativo: statusU,
});

const user = criarUsuario("Maria", 28, true);

// Utilizando o destructuring
const { nome, idade, ativo } = user;
console.log(nome, idade, ativo);

// Tradicional
// const nome = user.nome;
// const idade = user.idade;
// const ativo = user.ativo;
// console.log(nome, idade, ativo);

// ---------------------------------------------

const pessoa1 = {
  nome: "José",
  sobrenome: "Júnior",
};
