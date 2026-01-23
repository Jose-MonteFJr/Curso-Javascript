/**
 * Operadores lógicos
 * && -> AND - todas as expressões precisam ser verdadeiras para ser verdadeiro
 * || -> OR - todas as expressões precisam ser falsas para ser falso
 * ! -> NOT - inverte a expressão
 */

// && - AND

console.log(true && true && true); // Retorna true
console.log(true && false && true); // Retorna false

// || - OR

console.log(false || false || false); // Retorna false
console.log(false || false || true); // Retorna true

// ! - NOT

console.log(!true); // Retorna false
console.log();

// Short-circuit
// && - Retorna o primeiro valor FALSY que encontrar em uma expressão, caso não encontre, retorna o último valor da expressão. Após encontrar o valor FALSY, para de percorrer a expressão

// || - Retorna o primeiro valor TRUE que encontrar em uma expressão, caso não encontre, retorna o último valor da expressão. Após encontrar o valor true, para de percorrer a expressão

/**
 * Valores FALSY(valores que retornam false)
 * false
 * "" '' `` - strings vazias
 * 0
 * null / undefined
 * NaN
 *
 * Tudo diferente disso é TRUE
 */

// && - AND

console.log("A" && "B" && "C" && "D"); // Retorna "D"

//               Falsy
console.log("A" && 0 && " " && "D"); // Retorna "0" pois é o primeiro valor FALSY

// || - OR

console.log("" || null || undefined); // Retorna undefined

//                 True
console.log(null || "A" || "Cor"); // Retorna "A", primeiro valor TRUE

const a = 0;
const b = null;
const c = "false"; // retorna esse valor por ser true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
