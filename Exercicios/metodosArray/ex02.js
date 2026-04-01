// Crie uma função que receba um email e retorne se ele já está cadastrado.

const usuarios = [{ email: "moto@gmail.com" }, { email: "joao@gmail.com" }];

const emailDuplicado = (u, email) => {
  const emailU = u.some((u) => u.email === email);

  if (emailU) {
    throw new Error("Email já cadastrado.");
  }

  return "Esse email ainda não foi cadastrado.";
};

try {
  console.log(emailDuplicado(usuarios, "joa@gmail.com"));
} catch (e) {
  console.error(`${e}`);
}
