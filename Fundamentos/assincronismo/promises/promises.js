// promisse é um objeto que representa o resultado futuro de uma operação assincrona

/** Estados -
 *
 * - pending: Operação ainda em execução
 * - fullfilled: Operação terminou com *sucesso*
 * - rejected: Operação terminou com *erro*
 *
 */

/* Sintaxe - parametros principais: resolve -> deu certo | reject -> deu errado

const promessa = new Promisse((resolve, reject) => {
    // Operação assincrona
    });

promessa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });
*/

// Para utilizar o resultado da Promisse utilizamos: .then() -> deu certo | .catch() -> deu errado

// Ex -

const errado = false;
const sucesso = true;
const TEMPO_ESPERA = 2000;
const promessa = new Promise((resolve, reject) => {
  if (sucesso) {
    resolve("Operação realizada com sucesso!"); // Se der certo
  } else {
    reject("Ocorreu um erro!"); // Se der erro
  }
});

promessa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.log(erro);
  });

// Ex 02 - Operação assincrona real

const promessa2 = new Promise((resolve, reject) => {
  if (errado) {
    setTimeout(() => {
      resolve("Dados carregados");
    }, 2000);
  } else {
    reject("Ocorreu um erro ao carregar os dados");
  }
});

promessa2
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.log(err);
  });

// Ex 03 - Buscando usuario

const buscarUsuario = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Leo",
      };

      resolve(usuario);
      reject("Erro ao buscar o usuario");
    }, TEMPO_ESPERA);
  });
};

buscarUsuario()
  .then((usuario) => {
    console.log(`Usuario encontrado! Nome: ${usuario.nome}`);
  })
  .catch((err) => {
    console.log(err);
  });
