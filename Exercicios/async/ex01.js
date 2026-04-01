/**
Crie uma função executar() que:

seja async

use await para chamar buscarMensagem

mostre a mensagem no console 
 */

const buscarMensagem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world!");
    }, 1000);
  });
};

const executar = async () => {
  const mensagem = await buscarMensagem();
  console.log(mensagem);
};

executar();
