// Try catch - utilizado para tratar erros e exceções no código

try {
  // Try tenta executar, caso dê algum erro, envia para o bloco catch
  console.log(variavel); // Erro - a variavel não foi definida
} catch (err) {
  // (err) - onde o erro foi salvo
  console.log("Variavel não definida, por favor defina-a"); // Erro que será retornado
}
console.log();

// throw - Serve para lançar erros próprios, posso criar meu próprio erro
// Exemplo

const soma = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números!"); // Estou criando um novo error
  }

  return x + y;
};

try {
  console.log(soma(7, 7));
  console.log(soma("7", 7));
} catch (err) {
  console.log(err); // Salva o erro criado do throw no err
}
