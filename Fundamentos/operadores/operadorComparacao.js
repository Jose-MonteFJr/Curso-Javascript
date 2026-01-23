/**
 * > - maior que
 * >= - maior que ou igual a
 * < - menor que
 * <= - menor que ou igual a
 * == - igualdade (valor) ************* NUNCA UTILIZE
 * === - igualdade restrita (valor e tipo)
 * != - diferente (valor) ************* NUNCA UTILIZE
 * !== - diferente restrito (valor e tipo)
 */

console.log(10 == "10"); // Retorna true mesmo sendo valores diferente, string x number
console.log(10 === "10"); // Retorna false, afinal são valores diferentes
console.log(10 === 10); // Retorna true, afinal são valores literalmente iguais

console.log(10 != "10"); // Retorna false, mesmo sendo valores diferentes
console.log(10 !== "10"); // Retorna true, afinal são valores diferentes
console.log(10 !== 10); // Retorna false, são valores iguais
