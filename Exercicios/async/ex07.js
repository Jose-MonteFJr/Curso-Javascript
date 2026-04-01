/**
Desafio

Criar função executar() que:

busca produto

imprime:

Produto: Notebook
Preço: 3000
 */

const buscarProduto = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const produto = {
        id: 1,
        nome: "Notebook",
        preco: 3000,
      };

      resolve(produto);
    }, 1000);
  });
};

const executar = async () => {
  try {
    const produto = await buscarProduto();

    console.log(`Produto: ${produto.nome}`);
    console.log(`Preço: ${produto.preco}`);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();
