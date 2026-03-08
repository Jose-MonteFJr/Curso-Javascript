/**
Desafio

Criar função executar() que:

busca usuário

busca pedidos usando usuario.id

imprime os pedidos

Saída esperada

Usuário: Moto moto
Pedidos: [ ... ]
 */

const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: "Moto moto",
      };

      resolve(usuario);
    }, 1000);
  });
};

const buscarPedidos = (usuarioId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const pedidos = [
        { id: 1, valor: 50 },
        { id: 2, valor: 100 },
      ];

      resolve(pedidos);
    }, 1000);
  });
};

const executar = async () => {
  const usuario = await buscarUsuario();
  const pedido = await buscarPedidos();

  console.log(`Usuário: ${usuario.nome}`);
  console.log(`Pedidos: ${pedido}`);
};

executar();
