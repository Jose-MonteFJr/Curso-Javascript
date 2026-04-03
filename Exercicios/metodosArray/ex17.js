// Verifique se existe algum produto com estoque disponível.

const produtos = [
  { nome: "Teclado", estoque: 0 },
  { nome: "Mouse", estoque: 10 },
];

const estoque = (p) => {
  const produtoDisponivel = p.filter((p) => p.estoque > 0);

  return produtoDisponivel;
};

console.log(estoque(produtos));
