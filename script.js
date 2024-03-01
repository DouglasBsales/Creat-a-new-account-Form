function validarNome() {
  const inputNome = document.getElementById("nomeUsuario").value;
  const textErro1 = document.getElementById("textErro");
  const iconCheckUser = document.getElementById("iconCheckUser");

  const caracteres = /[^a-zA-Z]/;
  isValid = true;

  if (inputNome.length >= 3) {
    iconCheckUser.classList.remove("naoExibir");
    textErro1.classList.add("naoExibir");

    isValid = true;
  } else {
    iconCheckUser.classList.add("naoExibir");
    textErro1.classList.remove("naoExibir");

    isValid = false;
  }

  if (caracteres.test(inputNome)) {
    iconCheckUser.classList.add("naoExibir");
    textErro1.classList.remove("naoExibir");

    isValid = false;
  }

  if (inputNome.length === 0) {
    iconCheckUser.classList.add("naoExibir");
    textErro1.classList.remove("naoExibir");

    isValid = false;
  }

  return isValid;
}

document.getElementById("nomeUsuario").addEventListener("keyup", validarNome);

function validarSobrenome() {
  const inputSobrenome = document.getElementById("sobrenome").value.trim();
  const textErroSob = document.getElementById("textErro2");
  const iconCheckSob = document.getElementById("iconCheckSob");
  const divSobrenome = document.getElementById("sobreNome");

  const caracteres = /[^a-zA-Z]/;

  isValid = true;

  if (inputSobrenome.length >= 3) {
    iconCheckSob.classList.remove("naoExibir");
    textErroSob.classList.add("naoExibir");
    divSobrenome.classList.add("borderNormal");

    isValid = true;
  } else {
    iconCheckSob.classList.add("naoExibir");
    textErroSob.classList.remove("naoExibir");
    isValid = false;
  }

  if (caracteres.test(inputSobrenome)) {
    textErroSob.classList.remove("naoExibir");
    iconCheckSob.classList.add("naoExibir");
    isValid = false;
  }

  if (inputSobrenome.length === 0) {
    iconCheckSob.classList.add("naoExibir");
    isValid = false;
  }

  return isValid;
}

document
  .getElementById("sobrenome")
  .addEventListener("keyup", validarSobrenome);

function validarDia() {
  let day = parseInt(document.getElementById("day").value);
  let textErroDay = document.getElementById("textErroDia");

  isValid = true;

  if (isNaN(day) || day === 0 || day >= 32) {
    textErroDay.classList.remove("naoExibir");
    isValid = false;
  } else {
    textErroDay.classList.add("naoExibir");
    isValid = true;
  }

  return isValid;
}

document.getElementById("day").addEventListener("keyup", validarDia);

function validarAno() {
  let ano = parseInt(document.getElementById("ano").value);
  let textErroAno = document.getElementById("textErroAno");

  isValid = true;

  if (isNaN(ano) || ano === 0) {
    textErroAno.classList.remove("naoExibir");
    isValid = false;
  } else {
    textErroAno.classList.add("naoExibir");
    isValid = true;
  }

  if (ano.toString().length < 4 || ano <= 1924) {
    textErroAno.classList.remove("naoExibir");
    isValid = false;
  } else {
    textErroAno.classList.add("naoExibir");
    isValid = true;
  }

  return isValid;
}

document.getElementById("ano").addEventListener("keyup", validarAno);

function validarEmail() {
  let inputEmail = document.getElementById("email").value;
  let icon = document.getElementById("iconCheck");
  let msgErro = document.getElementById("erro");

  isValid = true;

  if (inputEmail.includes(".com")) {
    icon.classList.remove("naoExibir");
    icon.classList.add("exibir");

    msgErro.classList.remove("exibir");
    msgErro.classList.add("naoExibir");

    isValid = true;
  } else {
    icon.classList.remove("exibir");
    icon.classList.add("naoExibir");
    msgErro.classList.add("exibir");

    isValid = false;
  }

  if (inputEmail.length === 0) {
    msgErro.classList.remove("naoExibir");
    isValid = false;
  }

  return isValid;
}

document.getElementById("email").addEventListener("keyup", validarEmail);

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

  isValid = true;

  const caracteresEspeciais = /[$*_\-#@!]/;
  if (caracteresEspeciais.test(inputSenha)) {
    caracterEsp.style.color = "#44B342";
    icontrue.classList.add("exibir");
    iconFalse.classList.remove("exibir");
  } else {
    caracterEsp.style.color = "#D13100";
    icontrue.classList.remove("exibir");
    iconFalse.classList.add("exibir");
    isValid = false;
  }

  if (inputSenha.length >= 10) {
    caracterLength.style.color = "#44B342";
    iconCTrue.classList.add("exibir");
    iconCFalse.classList.remove("exibir");

    isValid = true;
  } else if (inputSenha.length < 10) {
    caracterLength.style.color = "#D13100";
    iconCTrue.classList.remove("exibir");
    iconCFalse.classList.add("exibir");
    isValid = false;
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
    isValid = false;
  }

  if (inputSenha.length === 0) {
    iconFalse.classList.remove("exibir");
    iconCFalse.classList.remove("exibir");
    iconLFalse.classList.remove("exibir");
    caracterEsp.style.color = "#C2C2C2";
    caracterLength.style.color = "#C2C2C2";
    letraM.style.color = "#C2C2C2";

    isValid = false;
  }

  return isValid;
}

document.getElementById("senha").addEventListener("keyup", validarSenha);

function confirmSenha() {
  let confirmSenhaInput = document.getElementById("senhaConfirm").value;
  let inputSenha = document.getElementById("senha").value;
  let senhaFalse = document.getElementById("senhaFalse");
  let iconCheckSenha = document.getElementById("iconCheckSenha");

  isValid = true;

  if (confirmSenhaInput === inputSenha) {
    senhaFalse.classList.add("naoExibir");
    iconCheckSenha.classList.add("exibir");

    isValid = true;
  } else {
    senhaFalse.style.color = "#D13100";
    senhaFalse.classList.remove("naoExibir");
    iconCheckSenha.classList.remove("exibir");

    isValid = false;
  }

  if (confirmSenhaInput.length === 0) {
    senhaFalse.classList.add("naoExibir");
    iconCheckSenha.classList.remove("exibir");

    isValid = false;
  }

  return isValid;
}

document.getElementById("senhaConfirm").addEventListener("keyup", confirmSenha);

function verificarTelefone() {
  const inputTelefone = document.getElementById("inputTelefone").value;
  const iconCheckNumber = document.getElementById("iconCheckNumber");
  const textErroNumber = document.getElementById("numberValid");
  const divTelefone = document.getElementById("divTelefone");

  isValid = true;

  if (isNaN(inputTelefone)) {
    textErroNumber.classList.remove("naoExibir");
    isValid = true;
  } else {
    textErroNumber.classList.add("naoExibir");
    isValid = false;
  }

  if (inputTelefone.length == 11) {
    iconCheckNumber.classList.remove("naoExibir");
    textErroNumber.classList.add("naoExibir");
    divTelefone.classList.add('borderNormal')

    isValid = true;
  } else {
    iconCheckNumber.classList.add("naoExibir");
    textErroNumber.classList.remove("naoExibir");

    isValid = false;
  }

  return isValid;
}

document
  .getElementById("inputTelefone")
  .addEventListener("keyup", verificarTelefone);

function validarDados() {
  if (validarNome() === false) {
    const divNome = document.getElementById("divNome");
    divNome.classList.remove("borderNormal");
  } else {
    divNome.classList.add("borderNormal");
  }

  if (validarSobrenome() === false) {
    const divSobrenome = document.getElementById("sobreNome");
    divSobrenome.classList.add("error");
  }

  if (validarDia() === false) {
    const day = document.getElementById("day");
    day.classList.remove("borderNormalData");
    day.classList.add("borderErroData");
  }

  if (validarAno() === false) {
    const ano = document.getElementById("ano");
    ano.classList.remove("borderNormalData");
    ano.classList.add("borderErroData");
  }

  if (validarSenha() === false) {
    const senha = document.getElementById("divSenha");
    senha.classList.remove("borderNormal");
    senha.classList.add("error");
  }

  if (confirmSenha() === false) {
    const confirmSenha = document.getElementById("confirmSenha");
    confirmSenha.classList.remove("borderNormal");
    confirmSenha.classList.add("error");
  }

  if (verificarTelefone() === false) {
    const divTelefone = document.getElementById("divTelefone");
    divTelefone.classList.remove("borderNormal");
    divTelefone.classList.add("error");
  }

  if (
    validarNome() === true &&
    validarSobrenome() === true &&
    validarDia() === true &&
    validarDia() === true &&
    validarAno() === true &&
    validarEmail() === true &&
    validarSenha() === true &&
    confirmSenha() === true &&
    verificarTelefone() === true
  ) {
    openModalTrue();
  }
}

function openModalTrue() {
  let modal = document.getElementById("modal");
  let divSob = document.getElementById("divSob");

  modal.classList.add("openModal");
  divSob.classList.remove("naoExibir");

  setTimeout(function () {
    closeModal();
  }, 4000);
}

function closeModal() {
  let modal = document.getElementById("modal");
  let divSob = document.getElementById("divSob");

  modal.classList.remove("openModal");
  divSob.classList.add("naoExibir");

  setTimeout(function () {
    window.location.reload();
  }, 400);
}
