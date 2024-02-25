function validarNomeESobrenome() {
  let inputNome = document.getElementById("nomeUsuario").value;
  let inputSobrenome = document.getElementById("sobrenome").value;
  let textErro1 = document.getElementById("textErro");
  let textErroSobrenome = document.getElementById("textErro2");
  let iconCheckUser = document.getElementById("iconCheckUser");

  const caracteres = /[!@#$%¨&*()\-_+{}[\]`´^~;.:\/='1-9']/;
  if (caracteres.test(inputNome)) {
    textErro1.classList.remove("naoExibir");
  } else {
    textErro1.classList.add("naoExibir");
  }

  if (caracteres.test(inputSobrenome)) {
    textErroSobrenome.classList.remove("naoExibir");
  } else {
    textErroSobrenome.classList.add("naoExibir");
  }

  if (inputNome.length >= 3) {
    iconCheckUser.classList.remove("naoExibir");
  }

  if (inputNome.length === 0) {
    iconCheckUser.classList.add("naoExibir");
  }

  // nome a cima

  // sobrenome abaixo

  if (caracteres.test(inputSobrenome)) {
    textErroSobrenome.classList.remove("naoExibir");
  } else {
    textErroSobrenome.classList.add("naoExibir");
  }

  if (caracteres.test(inputSobrenome)) {
    textErroSobrenome.classList.remove("naoExibir");
  } else {
    textErroSobrenome.classList.add("naoExibir");
  }

  if (inputSobrenome.length >= 3) {
    iconCheckSob.classList.remove("naoExibir");
  }

  if (inputSobrenome.length === 0) {
    iconCheckSob.classList.add("naoExibir");
  }
}

document.addEventListener("keyup", validarNomeESobrenome);

function validarDataNascimento() {
  let day = document.getElementById("day").value;
  let textErro = document.getElementById("textErroData");
  let ano = document.getElementById("ano").value;

  if (day.length === 0 || day == "0" || day >= "32") {
    textErro.classList.remove("naoExibir");
  } else {
    textErro.classList.add("naoExibir");
  }

  if (ano.length === 0 || ano == "0" || ano <= "1924" || ano.length === 3) {
    textErro.classList.remove("naoExibir");
  } else {
    textErro.classList.add("naoExibir");
  }
}

document.addEventListener("keyup", validarDataNascimento);

function validarEmail() {
  let inputEmail = document.getElementById("email").value;
  let icon = document.getElementById("iconCheck");
  let msgErro = document.getElementById("erro");

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
  //icons caracter especiais

  // icons caracterLength
  let iconCTrue = document.getElementById("iconCTrue");
  let iconCFalse = document.getElementById("iconCFalse");

  //icons letra maiuscula

  let iconLTrue = document.getElementById("iconLTrue");
  let iconLFalse = document.getElementById("iconLFalse");

  //paragrafo caracter Especial
  let caracterEsp = document.getElementById("caracterEsp");
  // paragrafo 10 caracteres
  let caracterLength = document.getElementById("caracterLength");
  // pargrafo letra Maiuscula
  let letraM = document.getElementById("letraM");

  const caracteresEspeciais = /[$*_\-#@!]/;
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
    iconCTrue.classList.add("exibir");
    iconCFalse.classList.remove("exibir");
  } else if (inputSenha.length < 10) {
    caracterLength.style.color = "#D13100";
    iconCTrue.classList.remove("exibir");
    iconCFalse.classList.add("exibir");
  }

  const letraMaiuscula = /[A-Z]/;
  if (letraMaiuscula.test(inputSenha)) {
    letraM.style.color = "#44B342";
    iconLTrue.classList.add("exibir");
    iconLFalse.classList.remove("exibir");
  } else {
    letraM.style.color = "#D13100";
    iconLTrue.classList.remove("exibir");
    iconLFalse.classList.add("exibir");
  }

  if (inputSenha.length === 0) {
    iconFalse.classList.remove("exibir");
    iconCFalse.classList.remove("exibir");
    iconLFalse.classList.remove("exibir");
    caracterEsp.style.color = "#C2C2C2";
    caracterLength.style.color = "#C2C2C2";
    letraM.style.color = "#C2C2C2";
  }
}

document.addEventListener("keyup", validarSenha);

function confirmSenha() {
  let confirmSenhaInput = document.getElementById("senhaConfirm").value;
  let inputSenha = document.getElementById("senha").value;
  let senhaFalse = document.getElementById("senhaFalse");
  let iconCheckSenha = document.getElementById("iconCheckSenha");

  if (confirmSenhaInput === inputSenha) {
    senhaFalse.classList.add("naoExibir");
    iconCheckSenha.classList.add("exibir");
  } else {
    senhaFalse.style.color = "#D13100";
    senhaFalse.classList.remove("naoExibir");
    iconCheckSenha.classList.remove("exibir");
  }

  if (confirmSenhaInput.length === 0) {
    senhaFalse.classList.add("naoExibir");
    iconCheckSenha.classList.remove("exibir");
  }
}

document.addEventListener("keyup", confirmSenha);

function verificarTelefone() {
  let inputTelefone = document.getElementById("inputTelefone").value;
  let numberValid = document.getElementById("numberValid");
  let iconCheckNumber = document.getElementById("iconCheckNumber");

  if (isNaN(inputTelefone)) {
    numberValid.classList.add("exibir");
  }

  if (inputTelefone.length === 0) {
    numberValid.classList.remove("exibir");
  }

  if (/^\d+$/.test(inputTelefone) && inputTelefone.length === 11) {
    iconCheckNumber.classList.add("exibir");
  } else {
    iconCheckNumber.classList.remove("exibir");
  }

  if (/^0+$/.test(inputTelefone)) {
    numberValid.classList.remove("naoExibir");
    iconCheckNumber.classList.remove("exibir");
} else {
    numberValid.classList.add("naoExibir");
}
}

document.addEventListener("keyup", verificarTelefone);
