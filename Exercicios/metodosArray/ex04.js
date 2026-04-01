// Retorne apenas os usuários ativos.

const usuarios = [
  { nome: "Moto moto", ativo: true },
  { nome: "João", ativo: false },
  { nome: "Maria", ativo: true },
];

const usuariosAtivos = (u) => {
  const usuario = u.filter((u) => u.ativo === true);
  return usuario;
};

console.log(usuariosAtivos(usuarios));
