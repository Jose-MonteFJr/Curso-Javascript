function main() {
  const form = document.querySelector("form");
  let peso = document.querySelector("#peso");
  let altura = document.querySelector("#altura");
  const divResultado = document.querySelector(".resultado");

  function testeEvento(evento) {
    evento.preventDefault();

    function calculoImc(peso, altura) {
      let imc = Number(peso / (altura * altura));
      return imc.toFixed(2);
    }

    let resultadoImc = calculoImc(peso.value, altura.value);
    function resultadoTabela() {
      if (peso.value === "" || altura.value === "") {
        divResultado.innerHTML = `Preencha todos os campos para continuar`;
      }

      if (isNaN(peso.value)) {
        divResultado.innerHTML = `Peso inválido`;
      }

      if (isNaN(altura.value)) {
        divResultado.innerHTML = `Altura inválida`;
      }

      if (
        peso.value !== "" &&
        altura.value !== "" &&
        !isNaN(peso.value) &&
        !isNaN(altura.value)
      ) {
        if (resultadoImc < 18.5) {
          divResultado.innerHTML = `Seu IMC é ${resultadoImc} (abaixo do peso)`;
          // console.log("Abaixo do peso");
        } else if (resultadoImc >= 18.5 && resultadoImc < 25) {
          divResultado.innerHTML = `Seu IMC é ${resultadoImc} (peso normal)`;
        } else if (resultadoImc >= 25 && resultadoImc < 30) {
          divResultado.innerHTML = `Seu IMC é ${resultadoImc} (sobrepeso)`;
        } else if (resultadoImc >= 30 && resultadoImc < 35) {
          divResultado.innerHTML = `Seu IMC é ${resultadoImc} (obesidade grau 1)`;
        } else if (resultadoImc >= 35 && resultadoImc < 40) {
          divResultado.innerHTML = `Seu IMC é ${resultadoImc} (obesidade grau 2)`;
        } else if (resultadoImc >= 40) {
          divResultado.innerHTML = `Seu IMC é ${resultadoImc} (obesidade grau 3)`;
        }
      }
    }

    function limparCampos() {
      peso.value = "";
      altura.value = "";
    }

    resultadoTabela();
    limparCampos();
  }

  form.addEventListener("submit", testeEvento);
}

main();
