// Retorne apenas os pedidos com status "pago".

const pedidos = [
  { id: 1, status: "pago" },
  { id: 2, status: "pendente" },
  { id: 3, status: "pago" },
];

const pedidosPagos = (p) => {
  const pedido = p.filter((p) => p.status === "pago");
  return pedido;
};

console.log(pedidosPagos(pedidos));
