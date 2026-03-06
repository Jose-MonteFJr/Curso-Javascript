// Promisse chaining - encadeamento de varias promises usando .then(), isso permite executar operações assincronas em sequencia, cada .then() recebe o resultado do anterior

// Obs - Sempre utilizar RETURN nos .then() se não quebra o encadeamento | Usar .catch() no final pois captura o erro de toda a cadeira | Evitar callback com promises

/* Fluxo - 

Buscar usuário
     ↓
Buscar pedidos
     ↓
Calcular total
     ↓
Mostrar resultado
 
// Exemplo com promise chaining - 

buscarUsuario()
  .then((usuario) => { // Deu certo usuario
    return buscarPedidos(usuario.id); // Retorna pedido
  })
  .then((pedidos) => { // Deu certo pedido
    return calcularTotal(pedidos); // Calcula
  })
  .then((total) => { // Deu certo o calculo
    console.log(`Total: ${total}`); // Mostra total
  })
  .catch((err) => { // Caso de algum erro durante o processo
    console.log(err);
  });

// Caminho feliz - Cada etapa espera a anterior terminar.

Promise 1 → then
               ↓
            Promise 2 → then
                           ↓
                        Promise 3 → then
  
 */

// Ex - Simulando um banco de dados

const TEMPO_ESPERA = 2000;

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

buscarUsuario()
  .then((usuario) => {
    // Deu certo usuario
    console.log(`Usuário: ${usuario.nome}`);
    return buscarPedidos(usuario.id); // Retorna pedido
  })
  .then((pedidos) => {
    // Deu certo pedido
    return calcularTotal(pedidos); // Calcula
  })
  .then((total) => {
    // Deu certo o calculo
    console.log(`Total: ${total}`); // Mostra total
  })
  .catch((err) => {
    // Caso de algum erro durante o processo
    console.log(err);
  });
