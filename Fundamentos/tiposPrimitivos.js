const nome = `Luiz`; //String
const nome1 = 'Luiz'; //String
const nome2 = "Luiz"; //String
const num1 = 10; //Number
const num2 = 1.10; //Number
let nomeAluno; //Undefined -> Não aponta para local nenhum na mémoria / não tem como ser definido
const sobrenome = null; //Null -> Não aponta para local nenhum na memória / null precisa ser definido
const booleanTrue = true; //Boolean
const booleanFalse = false; //Boolean

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenome, sobrenome);
console.log(typeof booleanTrue, booleanTrue);
console.log(typeof booleanFalse, booleanFalse);

const a = [1, 2]; //Array
const b = a;

console.log(a, b);

b.push(3); //Tanto "a" quanto "b" estão apontando para o mesmo lugar na memória

console.log(a, b);