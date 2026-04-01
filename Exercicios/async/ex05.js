/**
Desafio

Criar função executar() que:

usa try/catch

tenta buscar usuário

mostra erro caso aconteça

Saída esperada
Erro: Usuário não encontrado
 */

const buscarUsuario = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const erro = true;

      if (erro) {
        reject("Usuario nao encontrado");
      } else {
        resolve("Usuario: Nilce");
      }
    }, 1000);
  });
};

const executar = async () => {
  try {
    const usuario = await buscarUsuario();
    console.log(usuario);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();
