/**
Desafio

Criar função executar() que:

busca usuário

busca perfil

imprime:

Nome: Moto moto
Bio: Programador backend
Github: motomoto-dev
 */

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Moto moto",
      };

      resolve(usuario);
    }, 1000);
  });
};

const buscarPerfil = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const perfil = {
        bio: "Programador backend",
        github: "motomoto-dev",
      };

      resolve(perfil);
    }, 1500);
  });
};

const executar = async () => {
  try {
    const usuario = await buscarUsuario();
    const perfil = await buscarPerfil();

    console.log(`Nome: ${usuario.nome}`);
    console.log(`Bio: ${perfil.bio}`);
    console.log(`Github: ${perfil.github}`);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();
