function validarEmail() {
  let inputEmail = document.getElementById("email").value;
  let icon = document.getElementById("iconCheck");
  let msgErro = document.getElementById("erro");
  console.log(inputEmail);

  if (inputEmail.includes("@")) {
    icon.classList.remove("naoExibir");
    icon.classList.add("exibir");

    msgErro.classList.remove("exibir");
    msgErro.classList.add("naoExibir");
  } else {
    icon.classList.remove("exibir");
    icon.classList.add("naoExibir");
    msgErro.classList.add("exibir");
  }

  if (inputEmail.length === 0) {
    msgErro.classList.remove("exibir");
    msgErro.classList.add("naoExibir");
  }
}

document.addEventListener("keyup", validarEmail);

function validarSenha() {
  let inputSenha = document.getElementById("senha").value;
  let icontrue = document.getElementById("iconTrue");
  let iconFalse = document.getElementById("iconFalse");

  //paragrafo caracter Especial
  let caracterEsp = document.getElementById("caracterEsp");
  // paragrafo 10 caracteres
  let caracterLength = document.getElementById("caracterLength");
  // pargrafo letra Maiuscula
  let letraM = document.getElementById("letraM");

  const caracteresEspeciais = /[$*_\-#@!]/;
  console.log(inputSenha);
  if (caracteresEspeciais.test(inputSenha)) {
    caracterEsp.style.color = "#44B342";

    icontrue.classList.add("exibir");
    iconFalse.classList.remove("exibir");
  } else {
    caracterEsp.style.color = "#D13100";
    icontrue.classList.remove("exibir");
    iconFalse.classList.add("exibir");
  }

  if (inputSenha.length >= 10) {
    caracterLength.style.color = "#44B342";
  }
  else if (inputSenha.length < 10) {
    caracterLength.style.color = "#D13100";
  }

  const letraMaiuscula = /[A-Z]/;
  console.log(inputSenha);
  if (letraMaiuscula.test(inputSenha)) {
    letraM.style.color = "#44B342";
  } else {
    letraM.style.color = "#D13100";
  }

  if (inputSenha.length === 0) {
    iconFalse.classList.remove("exibir");
    iconFalse.classList.add("naoExibir");
    caracterEsp.style.color = "#C2C2C2";
    caracterLength.style.color = "#C2C2C2";
    letraM.style.color = "#C2C2C2";
  }
}

document.addEventListener("keyup", validarSenha);
