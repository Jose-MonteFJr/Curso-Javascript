// Retorne se o carrinho está vazio ou não.

const carrinho = [];

const carrinhoVazio = (c) => {
  const carrinho = c.length === 0 ? "Carrinho vazio." : "Carrinho com itens";
  return carrinho;
};

console.log(carrinhoVazio(carrinho));
