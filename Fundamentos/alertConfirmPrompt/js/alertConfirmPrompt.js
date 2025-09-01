alert(`Alert foi executado!`); // Aparece uma mensagem no navegador
confirm(`Deseja continuar?`); // Aparece uma mensagem com duas opções(cancelar, ok) e retorna valores boolean(false, true) 
prompt(`Voce esta bem?`); // Aparece uma caixa com input de texto para digitar

let confirmar = confirm(`Deseja apagar os dados?`); // A escolha fica salva na variavel
console.log(confirmar);

let nome = prompt(`Digite seu nome: `); // O nome digitado ficará salvo na variavel nome
console.log(`Seu nome é ${nome}`);
