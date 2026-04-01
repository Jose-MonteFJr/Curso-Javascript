/**
Desafio

Criar função async executar()

Usar await para buscar o usuário

Mostrar no console:

Nome: Moto moto
Idade: 20
 */

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Leo",
        idade: 21,
      };

      resolve(usuario);
    }, 1000);
  });
};

const executar = async () => {
  const usuario = await buscarUsuario();
  console.log(`Nome: ${usuario.nome}`);
  console.log(`Idade: ${usuario.idade}`);
};

executar();
