// Calcule a média das notas.

const notas = [7, 8, 9, 10];

const media = (n) => {
  const somaTotal = n.reduce((acc, valor) => acc + valor, 0);
  const tamanho = n.length;
  const media = somaTotal / tamanho;

  return media;
};

console.log(media(notas));
