/**
 * Luiz Otávio Miranda tem 30 anos, pesa 84 kg
 * tem 1.80 de altura e seu IMC é de 25.929292
 * Luiz Otávio nasceu em 1980
 */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

const anoAtual = new Date().getFullYear();

let imc; // peso / (altura * altura)
imc = peso / (alturaEmM*alturaEmM);
let anoNascimento; // Idade - anoAtual
anoNascimento = anoAtual - idade;

// Template Strings `${variavel}`

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}, ${nome} nasceu em ${anoNascimento}`);