// Calcule o total apenas dos pedidos pagos.

const pedidos = [
  { valor: 100, status: "pago" },
  { valor: 200, status: "pendente" },
  { valor: 50, status: "pago" },
];

const totalPedidosPagos = (p) => {
  const pedido = p
    .filter((p) => p.status === "pago")
    .reduce((acc, pedido) => acc + pedido.valor, 0);

  return pedido;
};

console.log(totalPedidosPagos(pedidos));
