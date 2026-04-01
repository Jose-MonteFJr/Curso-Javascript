// Crie uma função que receba um id e retorne o usuário correspondente.

const usuarios = [
  { id: 1, nome: "Moto moto" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" },
];

const buscarUsuario = (u, id) => {
  const usuario = u.find((u) => u.id === id);

  if (!usuario) {
    throw new Error("Usuário não encontrado!");
  }

  return usuario.nome;
};

try {
  console.log(buscarUsuario(usuarios, 3));
} catch (e) {
  console.error(`${e}`);
}
