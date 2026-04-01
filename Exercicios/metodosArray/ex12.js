// Retorne o nome de usuário com email específico.

const usuarios = [
  { nome: "Jao", email: "a@gmail.com" },
  { nome: "james", email: "b@gmail.com" },
];

const buscarUsuarioEmail = (u, email) => {
  const usuario = u.filter((u) => u.email === email).map((u) => u.nome);

  return usuario[0];
};

console.log(buscarUsuarioEmail(usuarios, "b@gmail.com"));
