// Verifique se existe pelo menos um usuário com permissão de admin.

const usuarios = [
  { nome: "Moto moto", role: "user" },
  { nome: "Admin", role: "admin" },
];

const usuarioAdmin = (u) => {
  const usuario = u.some((u) => u.role === "admin");
  if (usuario) {
    return "Usuário admin encontrado.";
  }

  return "Nenhum usuário admin cadastrado.";
};

console.log(usuarioAdmin(usuarios));
