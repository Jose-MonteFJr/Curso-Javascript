/** Métodos find e some
 *
 * find - retorna o *primeiro elemento* do array que satisfazer uma condição
 *  Se encontrar → retorna o objeto, se não → retorna undefined
 *
 * some - retorna *true/false* indicando se pelo menos um elemento atende a condição
 *
 * - some: validar existencia
 *
 */

/**
 * - Use find para buscar objetos
 * - User some para validações rápidas
 * - Sempre trate retorno undefined do find
 *
 */

// find - Buscar item especifico, recuperar registro único

// Ex 01 -

const usuarios = [
  { id: 1, nome: "Joao" },
  { id: 2, nome: "Remi" },
  { id: 3, nome: "Meg" },
  { id: 4, nome: "Ant" },
  { id: 5, nome: "Ze" },
];

const usuario = usuarios.find((u) => u.id === 3); // Percorre todo o array até a condição ser true

console.log(usuario.nome);

// some - validar existencia, checar permissões

const usuarios2 = [
  { id: 1, role: "user" },
  { id: 2, role: "user" },
  { id: 3, role: "admin" },
  { id: 4, role: "user" },
];

const existeAdmin = usuarios2.some((u) => u.role === "admin"); // Retorna true assim que a condição é satisfeita

console.log(existeAdmin); // Retorna true assim que encontra um elemento válido
