// Retorne um novo array removendo o campo senha.

const usuarios = [{ id: 1, nome: "Moto moto", senha: "123" }];

const login = (u) => {
  const usuario = u.map((u) => {
    return {
      id: u.id,
      nome: u.nome,
    };
  });

  return usuario;
};

console.log(login(usuarios));
