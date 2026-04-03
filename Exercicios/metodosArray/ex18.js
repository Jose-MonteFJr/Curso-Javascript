// Retorne os nomes em letras maiúsculas.

const usuarios = [{ nome: "moto moto" }, { nome: "joao" }];

const nomesMaiusculos = (u) => {
  const nomes = u.map((u) => u.nome);
  const [nome1, nome2] = nomes;
  return `${nome1.toUpperCase()}, ${nome2.toUpperCase()}`;
};

console.log(nomesMaiusculos(usuarios));
