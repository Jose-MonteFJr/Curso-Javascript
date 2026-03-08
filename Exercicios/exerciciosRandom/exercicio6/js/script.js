function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    let pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    pessoas.push(pessoa);
    resultado.innerHTML += `<p>Meu nome é ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.altura} de altura e peso ${pessoa.peso}Kg</p>`;
    console.log(pessoas);

    function limparCampos() {
      nome.value = "";
      sobrenome.value = "";
      peso.value = "";
      altura.value = "";
    }
    limparCampos();
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
