/**
Desafio

buscar os pedidos

calcular o total

mostrar:

Total: 150

Dica:

Use reduce().
 */

const buscarPedidos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pedidos = [
        { id: 1, valor: 50 },
        { id: 2, valor: 100 },
      ];

      resolve(pedidos);
    }, 1000);
  });
};

const calcularTotal = (pedidos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = pedidos.reduce((soma, pedido) => soma + pedido.valor, 0);
      resolve(total);
    }, 1000);
  });
};

const executar = async () => {
  const pedido = await buscarPedidos();
  const total = await calcularTotal(pedido);

  console.log(`Total: ${total}`);
};

executar();
