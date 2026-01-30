// Útil quando são casos de if/else, encurta muito o código
// (condição) ? "Valor se verdadeiro" : "Valor se falso";

let pontuacao = 950;

// Com if/else
// if (pontuacao >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário normal");
// }

// Operador ternario
let nivelUser = pontuacao >= 1000 ? "Vip" : "Normal";
console.log(nivelUser);
