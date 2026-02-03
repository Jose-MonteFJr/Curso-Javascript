const paragrafos = document.querySelector(".paragrafos"); // Pega o primeiro elemento
const ps = paragrafos.querySelectorAll("p"); // querySelectorAll - pega todos os elementos

const estilosBody = getComputedStyle(document.body); // Pegar estilos css computados no navegador
const backgroundBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundBody;
  p.style.color = "#fff";
}
