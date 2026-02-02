const elementos = [
  { tag: "p", texto: "Texto 1" }, // 0
  { tag: "div", texto: "Texto 2" }, // 1
  { tag: "section", texto: "Texto 3" }, // 2
  { tag: "footer", texto: "Texto 4" }, // 3
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  console.log(tag);
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
