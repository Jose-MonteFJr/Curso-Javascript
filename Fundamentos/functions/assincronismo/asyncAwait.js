/** Permite trabalhar com promises de forma simples e legivel
 *
 * async - Faz a função retornar uma promise
 *
 * await - Faz a função assincrona esperar pela promise
 *
 * Sempre utilizar try/catch para tratamento de erro
 */

/*
Promises chaining - 

buscarUsuario()
  .then((usuario) => {
    return buscarPedidos(usuario.id);
  })
  .then((pedidos) => {
    return calcularTotal(pedidos);
  })
  .then((total) => {
    console.log(total);
  })
  .catch((erro) => {
    console.log(erro);
  });

async/await - 

async function executar() {

  try {

    const usuario = await buscarUsuario();
    const pedidos = await buscarPedidos(usuario.id);
    const total = await calcularTotal(pedidos);

    console.log(total);

  } catch (erro) {

    console.log(erro);

  }

}

Ambos fazem a mesma coisa, porem async/await é mais legivel e pratico
 */

// Sintaxe - const funcao = async () => {Aqui dentro vem os await}; | 1° step - declarar uma função assincrona com async, regra: SEMPRE retorna uma promise

/*
Fluxo - 

Criar uma função com Promise 
 ↓
Criar a função assíncrona com async 
 ↓
Usar await para retornar a Promise da função 

*/

// Ex -

// // 1° step - criar as funções com promises(resolve, reject)
// const passearCachorro = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const passear = true;

//       if (passear) {
//         resolve("Voce passeou com o cachorro");
//       } else {
//         reject("Não passeou");
//       }
//     }, 1000);
//   });
// };

// const limparCozinha = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const limpar = true;

//       if (limpar) {
//         resolve("Voce limpou a cozinha");
//       } else {
//         reject("Nao limpou");
//       }
//     }, 1500);
//   });
// };

// const lixoFora = () => {
//   return new Promise((resolve, reject) => {
//     const lixo = false;

//     setTimeout(() => {
//       if (lixo) {
//         resolve("Jogou o lixo fora");
//       } else {
//         reject("Nao jogou");
//       }
//     }, 2000);
//   });
// };

// // 2° step - criar a função com async e await + try/catch para tratamento de erro

// const tarefasResolvidas = async () => {
//   try {
//     // caminho feliz
//     const passearCachorroFeito = await passearCachorro();
//     console.log(passearCachorroFeito);

//     const limparCozinhaFeito = await limparCozinha();
//     console.log(limparCozinhaFeito);

//     const lixoForaFeito = await lixoFora();
//     console.log(lixoForaFeito);

//     console.log("Parabens, voce e um dono de casa premium");
//   } catch (error) {
//     // caminho triste
//     console.log(`Erro: ${error}`);
//   }
// };

// tarefasResolvidas();

// Ex 02 - Simulando banco com async/await
const TEMPO_ESPERA = 1000;

const buscarUsuario = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Samir",
      };

      resolve(usuario);
      reject("Ocorreu um erro.");
    }, TEMPO_ESPERA);
  });
};

const buscarPedidos = (usuarioId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pedidos = [
        { id: 1, valor: 100 },
        { id: 2, valor: 200 },
        { id: 3, valor: 200 },
      ];

      resolve(pedidos);
    }, TEMPO_ESPERA);
  });
};

const calcularTotal = (pedidos) => {
  return new Promise((resolve) => {
    const total = pedidos.reduce((soma, pedido) => soma + pedido.valor, 0);
    resolve(total);
  });
};

const executar = async () => {
  try {
    const usuarioEncontrado = await buscarUsuario();
    const pedidoFeito = await buscarPedidos(usuarioEncontrado.id);
    const total = await calcularTotal(pedidoFeito);

    console.log(`Usuário encontrado: ${usuarioEncontrado.nome}`);
    console.log(`Valor do pedido: R$${total},00`);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

executar();
