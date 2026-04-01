/**
# Funções

Você deve criar:

buscarUsuario()
buscarPedidos()
calcularTotal()

# Fluxo

buscarUsuario
   ↓
buscarPedidos
   ↓
calcularTotal

# Saída

Usuário: Moto moto
Total gasto: 350
 */

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Jhon",
        idade: 23,
      };
      resolve(usuario);
    }, 1000);
  });
};

const buscarPedidos = (usuarioId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pedidos = [
        { id: 1, valor: 200 },
        { id: 2, valor: 50 },
        { id: 3, valor: 100 },
      ];

      resolve(pedidos);
    }, 1500);
  });
};

const calcularTotal = (pedidos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = pedidos.reduce((soma, pedido) => soma + pedido.valor, 0);

      resolve(total);
    }, 2000);
  });
};

const executar = async () => {
  try {
    const usuario = await buscarUsuario();
    const pedido = await buscarPedidos();
    const total = await calcularTotal(pedido);

    console.log(`Usuário: ${usuario.nome}`);
    console.log(`Total gasto: ${total}`);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();
