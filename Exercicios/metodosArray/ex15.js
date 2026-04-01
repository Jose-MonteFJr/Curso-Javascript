// Retorne o primeiro pedido com valor maior que 200.

const pedidos = [{ valor: 50 }, { valor: 300 }, { valor: 400 }];

const pedidoCaro = (p) => {
  const pedido = p.find((p) => p.valor > 200);

  return pedido;
};

console.log(pedidoCaro(pedidos));
