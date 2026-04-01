// Calcule o valor total dos pedidos.

const pedidos = [{ valor: 100 }, { valor: 200 }, { valor: 50 }];

const totalPedidos = (p) => {
  const total = p.reduce((acc, pedido) => acc + pedido.valor, 0);
  return total;
};

console.log(totalPedidos(pedidos));
