// setTimeout agenda a execução de uma função para acontecer depois que um tempo específico passar.

// Obs - o restante do codigo continua rodando

// sintaxe - setTimeout(funcao, tempo);

// funcao - Função a ser executada após o atraso
// tempo - atraso em milissegundos(1000ms = 1 segundo)

// Usos
/**
 * - Esperar uma animação acabar
 * - Simular requisição de API
 * - Mostrar notificação depois de um tempo
 *
 */

// Ex -
console.log("Inicio");

setTimeout(() => {
  console.log("Executou depois de 1 segundo");
  console.log();
}, 1000);

console.log("fim"); // Aparece antes do setTimeout afinal o codigo continua rodando

// Boas práticas

// Use constantes de tempo

const TEMPO_ESPERA = 2000;

setTimeout(() => {
  console.log("Executou!");
  console.log();
}, TEMPO_ESPERA);

// Cancele timeouts quando necessario - clearTimeout();

const timer = setTimeout(() => {
  bomDia(); // Não será executada
}, TEMPO_ESPERA);

clearTimeout(timer); // clearTimeout cancela a função antes dele ser executado

const bomDia = () => {
  console.log("Bom dia!");
};

// Simulando busca de usuario em API

const buscarUsuario = (callback) => {
  console.log("Buscando usuario...");

  // Simula tempo de resposta do servidor
  setTimeout(() => {
    const usuario = {
      nome: "Jose",
      idade: 20,
    };

    callback(usuario);
  }, TEMPO_ESPERA);
};

// Função anonima
buscarUsuario((usuario) => {
  console.log(`Usuario recebido: ${usuario.nome}`);
});
