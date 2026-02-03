// Objetos literais
// Para criar um objeto utilizo {}, dentro das chaves virão os atributos
// Podemos criar functions dentro de objetos
const pessoa01 = {
  nome: "Marcos",
  profissao: "Mestre de obra",
  idade: 25,

  fala() {
    console.log(`Me chamo ${this.nome} e tenho ${this.idade}`); // this.atributo, consigo utilizar os atributos do objeto
  },
};

console.log(pessoa01.nome); // Utilizo o . para chamar o atributo do objeto
console.log(pessoa01["profissao"]); // Também posso utilizar [" "] para chamar o atributo
console.log(pessoa01.idade);
pessoa01.fala();

// Função que cria um objeto
function criarPessoa(nome, profissao, idade) {
  return {
    nome,
    profissao,
    idade,

    fala() {
      console.log(`Me chamo ${this.nome} e tenho ${this.idade}`);
    },
  };
}

let pessoa1 = criarPessoa("Luciano", "Advogado", 37);
let pessoa2 = criarPessoa("Marta", "Padeira", 54);
console.log(pessoa1); // Passa o objeto completo
console.log(pessoa1.profissao); // Passa um único atributo do objeto
console.log(pessoa2.profissao);
let pessoa3 = criarPessoa("Jonas", "Pedreiro", 23);
pessoa3.fala();
