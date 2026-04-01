// Retorne um array contendo apenas os IDs.

const pedidos = [{ id: 1 }, { id: 2 }, { id: 3 }];

const buscarId = (p) => {
  const id = p.map((p) => p.id);
  return id;
};

console.log(buscarId(pedidos));
