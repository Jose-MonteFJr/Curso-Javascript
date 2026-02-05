// Try catch - utilizado para tratar erros e exceções no código
/**
 * Quando utilizar try catch -
 * Consumir API
 * JSON.parse
 * Acesso a dados externos
 * Regras críticas
 * Conversões perigosas
 *
 */
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

const cadastrarUsuario = (nome) => {
  try {
    if (!nome) {
      throw new Error("Nome é obrigatório.");
    }
    console.log("Usuário cadastrado com sucesso.");
    console.log(`Seja bem vindo ${nome}`);
  } catch (err) {
    console.log("Falha no cadastro: ", err.message);
  }
};

cadastrarUsuario("Antonio");

// Exemplo com JSON
try {
  const dados = JSON.parse('{"nome": "Luis"'); // Erro - está faltando a } no final
  console.log(dados.nome);
} catch (err) {
  console.log("Erro: JSON inválido.");
}
