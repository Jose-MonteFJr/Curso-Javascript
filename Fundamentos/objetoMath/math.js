let num1 = 5.5689;
console.log(Math.floor(num1)); // Math.floor arredonda para baixo(fixo) - 5
console.log(Math.ceil(num1)); // Math.ceil arredonda para cima(fixo) - 6
console.log(Math.round(num1)); // Math.round arredonda de forma dinâmica, arredonda para o valor mais próximo, ex - 1.2 = 1, 1.5 = 2 e etc
console.log(Math.max(10, -1, 0, 500, 16, -89, 90, 72, 1, 2, 5, 8)); // Math.max Retorna o maior valor
console.log(Math.min(10, -1, 0, 500, 16, -89, 90, 72, 1, 2, 5, 8)); // Math.min Retorna o menor valor

console.log(Math.random()); // Math.random retorna um valor aleatorio entre 0 e 1

// Exemplo - numero aleatorio inteiro entre 50 e 20
let aleatorio = Math.floor(Math.random() * (50 - 20 + 1)) + 20; // Math.floor(Math.random() * (max - min + 1)) + min;
console.log(aleatorio);

console.log(Math.PI); // Valor de PI

console.log(Math.sqrt(81)); // Math.sqrt() retorna a raiz quadrada | outra forma - (81 ** 0.5);
console.log(Math.cbrt(8)); // Math.sqrt() retorna a raiz cúbica
console.log(81 ** 1 / 5); // Raiz quinta
