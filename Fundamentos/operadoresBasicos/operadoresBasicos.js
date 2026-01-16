/** ----------------------------------------------------------------------
 * 
 * Aritméticos
 * +    Adição(Number) / Concatenação(String)
 * **   Pontenciação
 * %    Resto da divisão
 * - / *    Subtração / Divisão / Multiplicação
 * -----------------------------------------------------------------------
 * 
 * Ordem de precedência
 * ()   
 * **   
 * * / %    
 * + -
 * 
 * ----------------------------------------------------------------------
 * 
 * ++   Incremento - Aumenta em 1
 * --   Decremento - Diminui em 1
 * 
 * ----------------------------------------------------------------------
 * 
 * Atribuição - Pode ser feito com qualquer operador aritmético
 * +=   Faz a conta e já guarda o resultado na mesma variável.
 * -=   Ex - contador += 1; vai somar o valor do contador com 1 e já atribuir ao contador, mesma coisa que contador = contador + 1;
 * *=   
 * /=   
 * **=
 * %=
 * 
 * ----------------------------------------------------------------------
 * 
 * Conversores - Convertem o que estiver dentro dos parênteses para: 
 * parseInt();  Inteiro
 * parseFloat();    Decimais
 * Number();    Inteiro/Decimais
 */

let contador = 0;
console.log(contador);
contador++; // Pós incremento - Aumenta depois da variável
console.log(contador);
++contador; // Pré incremento - Aumenta antes da variável
console.log(contador);

let contador2 = 10;
console.log(contador2);
contador2--; // Pós decremento - Diminui depois da variável
console.log(contador2);
--contador2; // Pós decremento - Diminui antes da variável
console.log(contador2);

let contador3 = 1;
contador3 += 2; // Mesma coisa que contador3 = contador3 + 2; porém de forma abreviada 
console.log(contador3); // 3

const num1 = 2;
const num2 = "J";
console.log(num1 * num2); // Erro NaN - Not a number