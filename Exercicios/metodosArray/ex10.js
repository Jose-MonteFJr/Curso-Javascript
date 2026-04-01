// Verifique se todos os pedidos estão pagos.

const pedidos = [{ status: "pago" }, { status: "pago" }, { status: "pago" }];

const pedidosPagos = (p) => {
  const pedidos = p.every((p) => p.status === "pago");

  if (pedidos) {
    return "Todos os pedidos foram pagos.";
  }

  return "Existem pedidos pendentes.";
};

console.log(pedidosPagos(pedidos));
