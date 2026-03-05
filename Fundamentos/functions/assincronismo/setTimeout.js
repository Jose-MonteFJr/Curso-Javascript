// setTimeout agenda a execução de uma função para acontecer depois que um tempo específico passar.

// Obs - o restante do codigo continua rodando

// sintaxe - setTimeout(funcao, tempo);

// funcao - Função a ser executada após o atraso
// tempo - atraso em milissegundos(1000ms = 1 segundo)

// Ex -

setTimeout(() => {
  console.log("Executou depois de 1 segundo");
}, 1000);

console.log("Ja fui executado");
