/**
 * Analogia
 * try → “vou tentar fazer algo”
 * catch → “deu ruim, vou resolver”
 * finally → “aconteça o que acontecer, faço isso no final”
 *
 * finally - Utilizado para fechar conexão, parar loading e limpar estados
 *
 */

try {
  // É executado quando não há erros
} catch (err) {
  // É executado quando há erros
} finally {
  // Sempre é executado
}

try {
  console.log("Buscando dados...");
  throw new Error("Falha na API.");
} catch (err) {
  console.log("Erro:", err.message);
} finally {
  console.log("Finalizando processo");
}
console.log();

// Exemplo

const buscarUsuario = () => {
  console.log("Loading...");

  try {
    throw new Error("Servidor fora do ar.");
  } catch (e) {
    console.log("Falha:", e.message);
  } finally {
    console.log("Finalizando processos.");
  }
};

buscarUsuario();
