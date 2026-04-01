// Retorne um array contendo apenas os nomes.

const usuarios = [{ nome: "Moto moto" }, { nome: "João" }, { nome: "Maria" }];

const listarUsuarios = (u) => {
  const usuario = u.map((u) => u.nome);
  return usuario;
};

console.log(listarUsuarios(usuarios));
