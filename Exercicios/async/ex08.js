/**
# Desafio

Crie uma função async chamada:

calcularDesconto(preco)

# Ela deve:

esperar 1 segundo

aplicar 10% de desconto

retornar o novo valor

# Exemplo esperado
const precoFinal = await calcularDesconto(200);

console.log(precoFinal);

# Saída:

180
 */

const calcularDesconto = (preco) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const desconto = preco - 0.1 * preco;

      resolve(desconto);
    }, 1000);
  });
};

const executar = async () => {
  try {
    const precoFinal = await calcularDesconto(200);
    console.log(precoFinal);
  } catch (err) {
    console.error(`Erro: ${err}`);
  }
};

executar();
