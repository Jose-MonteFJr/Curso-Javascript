/** Strings são sequências de caracteres usadas para representar texto em JavaScript e são delimitadas por aspas simples (' '), aspas duplas (" ") ou crases (` `).
 *
 * Strings são indexadas, o que significa que cada caractere em uma string tem uma posição numérica associada, começando do zero.
 *
 *
 */

//               01234567
let umaString = "Um texto";
let outraString = "O rato roeu a roupa do rei de roma";
console.log(umaString[4]); // Acessando o caractere na posição 4
console.log(umaString.charAt(0)); // Acessando o caractere na posição 0 usando charAt

console.log(`${umaString} em um lindo dia`); // Concatenação com Template Strings

console.log(umaString.match(/[a-z]/g)); // Retorna as letras do Regex(Expressão regular) em array
console.log(umaString.search(/[a-z]/g)); // Retorna a partir do primeiro indice, aceita Regex

console.log(umaString.replace("Um", "Olha lá o")); // Substitui, aceita Regex
console.log(outraString.replace(/r/g, "$")); // Exemplo Regex simples

console.log(outraString.length); // Retorna o tamanho da string em caracteres

console.log(outraString.slice(2, 6)); // Fatiamento -  Retorna as letras que estão entre os indices colocados(inicio, fim)

console.log(outraString.toUpperCase()); // Deixa tudo maiusculo
console.log(outraString.toLowerCase()); // Deixa tudo minusculo
