/**
Cenário

Você tem:

buscarUsuario()
buscarPosts(usuarioId)
buscarComentarios(postId)

Desafio

buscar usuário

buscar posts

pegar primeiro post

buscar comentários

mostrar no console

Resultado esperado

Usuário: Moto moto
Post: Aprendendo Async/Await
Comentários: 3
 */

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Jhen",
      };

      resolve(usuario);
    }, 1000);
  });
};

const buscarPosts = (usuarioId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = {
        id: 1,
        nome: "Aprendendo Async/Await",
        desc: " ",
      };

      resolve(post);
    }, 1000);
  });
};

const buscarComentarios = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const comentario = {
        id: 1,
        quantidade: 3,
      };

      resolve(comentario);
    }, 1000);
  });
};

const executar = async () => {
  try {
    const usuario = await buscarUsuario();
    const post = await buscarPosts(usuario.id);
    const comentario = await buscarComentarios(post.id);

    console.log(`Usuário: ${usuario.nome}`);
    console.log(`Post: ${post.nome}`);
    console.log(`Comentários: ${comentario.quantidade}`);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();
