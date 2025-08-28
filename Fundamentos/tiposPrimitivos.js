// Tipos de dados primitivos - string, number, undefined, null e boolean
const nome = `Luiz`; //String
const nome1 = 'Luiz'; //String
const nome2 = "Luiz"; //String
const num1 = 10; //Number
const num2 = 1.10; //Number
let nomeAluno; //Undefined -> Não aponta para local nenhum na mémoria / não tem como ser definido
const sobrenome = null; //Null -> Não aponta para local nenhum na memória / null precisa ser definido / desconfigurando uma variável
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

//Dados passados por referência
// Array é uma referência
const a = [1, 2]; //Arrays apontam para o mesmo lugar na memória
const b = a;

console.log(a, b); 

b.push(3); // .push é um método para adicionar um novo valor no final de um array

console.log(a, b); // Como a e b apontam para o mesmo lugar, ambos têm o mesmo valor mesmo se for atualizado

// Tipos primitivos são apenas cópias e NÃO referências

let c = 2; //Tipos primitivos não apontam para o mesmo lugar
const d = c; //d apenas copia o primeiro valor de c e para

console.log(c, d); // 2 2

c = 3;

console.log(c, d); // 3 2
// d não atualiza o novo valor de c, permanece estagnado no primeiro valor "2"