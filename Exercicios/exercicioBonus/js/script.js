let contador = 1;

// Função
function adicionarItem() {
  const ol = document.getElementById("lista"); // Pega o id do elemento

  const li = document.createElement("li"); // Cria a tag li

  li.textContent = `Item ${contador}`; // Adiciona um conteudo de texto dentro do li

  ol.appendChild(li); // Adiciona o li(tag filho) dentro da ol(tag pai)

  contador++; // Incrementa o contador
}
