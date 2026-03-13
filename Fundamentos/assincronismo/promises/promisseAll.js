/**
 * - Permite executar várias promises em paralelo(ao mesmo tempo)  
 * - Recebe um array de promises e retorna uma nova promise
 * - Espera todas as promises terminarem antes de continuar
 * - Se qualquer promise falhar, tudo falha  
 * 
 *  # Boas práticas
 * 
 * - Usar com tarefas independentes
 * - Usar destructuring
 * - Não esquecer await
 
 # Sintaxe 

Promise.all([promise1, promise2, promise3])

# Performance 

## Sem promise.all() - 

const usuarios = await buscarUsuarios();
const posts = await buscarPosts();
const comentarios = await buscarComentarios();

### Fluxo 

buscarUsuarios (espera)
        ↓
buscarPosts (espera)
        ↓
buscarComentarios (espera)

Tempo total = 1 + 1 + 1 = 3s

## Com promise.all() - 

const [usuarios, posts, comentarios] = await Promise.all([
  buscarUsuarios(),
  buscarPosts(),
  buscarComentarios()
]);

### Fluxo 

buscarUsuarios
buscarPosts
buscarComentarios
     ↓
executam juntos

Tempo total = 1s

 *   
 */

// Ex 01 -

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Ana", "Carlos"]);
    }, 1000);
  });
};

const buscarPost = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post1", "Post2"]);
    }, 1000);
  });
};

const executar = async () => {
  try {
    const [usuario, post] = await Promise.all([buscarUsuario(), buscarPost()]);

    console.log(`Usuario: ${usuario}`);
    console.log(`Post: ${post}`);
    console.log();
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();

// Ex 02 -

const buscarUsuario1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: "Leo" });
    }, 2000);
  });
};

const buscarPedido = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 2000);
  });
};

const buscarEndereco = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Brasilia");
    }, 2000);
  });
};

const executar2 = async () => {
  try {
    const [usuario, pedido, endereco] = await Promise.all([
      buscarUsuario1(),
      buscarPedido(),
      buscarEndereco(),
    ]);

    console.log(`Usuario: ${usuario.nome}`);
    console.log(`Pedidos: ${pedido}`);
    console.log(`Endereço: ${endereco}`);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar2();
