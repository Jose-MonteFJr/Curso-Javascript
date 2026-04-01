// Retorne o produto com id = 2.

const produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" },
];

const buscarProduto = (p) => {
  const produto = p.find((p) => p.id === 2);
  return produto.nome;
};

console.log(buscarProduto(produtos));
