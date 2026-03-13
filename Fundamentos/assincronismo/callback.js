// Callbacks são funções que são passadas como parametros para outras funções para serem executadas depois

// Callback = função que será chamada depois

// Utilizado em eventos, APIs e timers
const principal = (callback) => {
  console.log("Executando a função principal");

  callback();
};

const segundaFuncao = () => {
  console.log("Callback executado");
  console.log();
};

principal(segundaFuncao); // segundaFuncao foi passada para a principal

// Exemplo 1 -

const pedirComida = (callback) => {
  // callback como parametro
  console.log("Pedido feito!"); // Executa instantaneamente

  setTimeout(() => {
    console.log("Comida pronta!");
  }, 2000); // Executa depois de 2 segundos

  setTimeout(() => {
    callback();
  }, 3000); // Chama a função depois de 3 segundos
};

const comer = () => {
  // Função a ser chamada
  console.log("Hora de comer!");
  console.log();
};

pedirComida(comer);

// Exemplo 2 -

const buscarUsuario = (callback) => {
  setTimeout(() => {
    const usuario = {
      nome: "Leandro",
      idade: 40,
    };

    callback(usuario);
  }, 4000);
};

// Função anonima
buscarUsuario((usuario) => {
  console.log(`Usuario recebido: ${usuario.nome}`);
  console.log();
});

// Callback com dados - podem receber parametros

const calcular = (a, b, operacao) => {
  return operacao(a, b);
};

// Funções callback --
const soma = (a, b) => {
  return a + b;
};

const multiplicacao = (a, b) => {
  return a * b;
};

// --------------------

const exibirCalculo = (a, b, op) => {
  setTimeout(() => {
    console.log(calcular(a, b, op));
    console.log();
  }, 6000);
};

exibirCalculo(9, 10, multiplicacao);
exibirCalculo(9, 10, soma);

// forEach - percorrer arrays

const numeros = [1, 2, 3, 4, 5, 6];

// (numero) => {...} é um callback
numeros.forEach((numero) => {
  console.log(numero);
});
