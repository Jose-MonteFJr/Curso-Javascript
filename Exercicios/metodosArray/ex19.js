// Retorne a quantidade de usuários ativos.

const usuarios = [{ ativo: true }, { ativo: false }, { ativo: true }];

const quantidadeUsuarios = (u) => {
  const usuario = u.filter((u) => u.ativo === true);
  return usuario.length;
};

console.log(quantidadeUsuarios(usuarios));
