/**
Retorne um objeto com:

{
  total: ?,       // soma dos pagos
  quantidade: ?   // quantidade de pagos
}

 */

const pedidos = [
  { valor: 100, status: "pago" },
  { valor: 200, status: "pago" },
  { valor: 50, status: "pendente" },
];

const carrinho = (p) => {
  const pagos = p.filter((p) => p.status === "pago");
  const total = pagos.reduce((acc, p) => acc + p.valor, 0);
  const quantidade = pagos.length;

  return {
    total,
    quantidade,
  };
};

console.log(carrinho(pedidos));
