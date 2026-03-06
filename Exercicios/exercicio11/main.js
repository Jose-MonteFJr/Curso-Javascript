// Ex 01 -

const buscarproduto = (callback) => {
  const TEMPO_ESPERA = 3000;

  console.log("Buscando o produto...");

  setTimeout(() => {
    const produto = {
      nome: "monster",
      preco: 12.0,
      estoque: 50,
    };

    callback(produto);
  }, TEMPO_ESPERA);
};

buscarproduto((produto) => {
  console.log(
    `Produto encontrado: Nome: ${produto.nome}, Preço: R$${produto.preco}, Quantidade: ${produto.estoque}`,
  );
  console.log();
});

// Ex 02 -

const buscarUsuario = (callback) => {
  console.log("Buscando cliente...");

  setTimeout(() => {
    const usuario = {
      nome: "Moto moto",
    };

    callback(usuario);
  }, 2000);
};

buscarUsuario((usuario) => {
  console.log(`Cliente encontrado: ${usuario.nome}`);
});

// Ex 03 -

setTimeout(() => {
  console.log("Sistema pronto");
}, 3000);
setTimeout(() => {
  console.log("Carregando dados");
}, 1000);
setTimeout(() => {
  console.log("Dados carregados");
}, 2000);
setTimeout(() => {
  console.log("Iniciando sistema");
}, 0);
