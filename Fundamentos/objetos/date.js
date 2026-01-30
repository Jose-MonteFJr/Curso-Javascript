// Objeto Date()
let data = new Date(); // Retorna a data e hora atual
console.log(data.toString());

data = new Date("2020-01-28 21:12:01"); // Formato dateString
console.log(data.toString());

// Pegar informações especificas das datas
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); // meses começam a partir do 0
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Milisegundos", data.getMilliseconds());
console.log("Dia semana", data.getDay()); // 0 - domingo | 6 - sábado
