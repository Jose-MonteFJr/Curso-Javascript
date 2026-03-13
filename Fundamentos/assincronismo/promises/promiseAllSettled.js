/**
 * - Executa varias promises ao mesmo tempo
 * - Espera todas terminarem, INDEPENDENTE de sucesso ou erro, ou seja, se uma falhar ele continua
 * - Não lança erro
 * 
 * # Boas práticas
 * 
 * - Usar quando falhas são aceitáveis, ex - carregar widgets do dashboard(se um falhar os outros ainda aparecem)
 * - Usar com tarefas independentes
 * - Tratar resultados, ex - status === "fulfilled"

# Sintaxe - 

Promise.allSettled([promise1, promise2, promise3])

# Obs - 

Retorna uma promise com um array de resultados - 
    fulfilled = sucesso
    rejected = erro

    Ex - 

    [
        { status: "fulfilled", value: ... } // Sucesso
        { status: "rejected", reason: ... } // Erro
    ]
 
*/

// Ex 01 -

const buscarUsuarios = () => {
  return Promise.resolve(["Moto moto", "Ana"]);
};

const buscarPosts = () => {
  return Promise.reject("Erro na API de posts");
};

const buscarComentarios = () => {
  return Promise.resolve(["Comentário 1"]);
};

const executar = async () => {
  const resultados = await Promise.allSettled([
    buscarUsuarios(),
    buscarPosts(),
    buscarComentarios(),
  ]);

  console.log(resultados);
};

executar(); // Executa mesmo uma falhando

// Ex 02 - exemplo real

const executar2 = async () => {
  const resultados = await Promise.allSettled([
    buscarUsuarios(),
    buscarPosts(),
    buscarComentarios(),
  ]);

  const sucessos = resultados
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const erros = resultados
    .filter((r) => r.status === "rejected")
    .map((r) => r.reason);

  console.log(`Sucessos: ${sucessos}`);
  console.log(`Erros: ${erros}`);
};

executar2();
