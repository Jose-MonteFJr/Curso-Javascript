/** JSON (Javascript object notation) é um formato leve de troca de dados baseado em texto, utilizado para representar informações estruturadas
 *
 * Finalidade -
 * - Comunicação entre backend e frontend
 * - Troca de dados entre sistemas(APIs)
 * - Armazenamento de configurações
 * - Persistência de dados simples
 *
 * Quando usar -
 * - Enviar dados via API(HTTP)
 * - Receber responses do servidor
 * - Salvar dados estruturados em arquivos
 * - Trabalhar com integrações externas
 *
 * # Regras
 * Não pode -
 * - Funções
 * - undefined
 * - Virgulas no final
 * - Comentários
 * Sempre -
 * - Chaves entre aspas " "
 * - Strings com aspas duplas
 *
 * Boas práticas -
 * - Utilizar nomes claros nas chaves
 * - Evitar estruturas profundas
 * - Padronize (camelCase ou snake_case)
 * - Valide JSON antes de usar
 */

/** Estrutura basica -
 *
 * Objetos -> { }
 * Arrays -> [ ]
 * Chaves e valores
 *
 */

/** Exemplo formato JSON

{
  "nome": "Moto moto",
  "idade": 20,
  "ativo": true
}

*/

/** Tipos permitidos em JSON
 *
 * String - "Joao"
 * Number - 20
 * Boolean - true/false
 * Array - [1, a]
 * Object - { "nome": "Joao", "idade": 20 }
 * Null - null
 *
 */

/** Erros clássicos de JSON quebrado(mal formatado)
 *
 * Unexpected token
 * Unexpected end of JSON input
 *
 */

// Sites para validar JSON

// https://jsonlint.com/
// https://jsonformatter.org/

// Exemplo real -

/*
app.post("/usuarios", (req, res) => {
  const usuario = req.body;

  console.log(usuario);

  res.json({
    mensagem: "Usuário criado com sucesso",
    usuario: usuario,
  });
});
*/

// Request -

/**
{
  "nome": "Moto moto",
  "email": "moto@email.com"
}
 */

// Response -

/**
{
  "mensagem": "Usuário criado com sucesso",
  "usuario": {
    "nome": "Moto moto",
    "email": "moto@email.com"
  }
}
 */

// Conversão

// JSON -> Objeto - JSON.parse()

const json = '{ "nome": "Leo" }';

const usuario = JSON.parse(json);

console.log(usuario.nome);

// Objeto -> JSON - JSON.stringify()

const user = {
  nome: "Jonas",
};

const json2 = JSON.stringify(user);

console.log(json2);
