let sliderElement = document.querySelector("#slider");

let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset =
  "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ!@#%&1234567890";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  password.innerHTML = pass;
  novaSenha = pass;

  containerPassword.classList.remove("hide");
}

function copyPassword() {
  navigator.clipboard
    .writeText(novaSenha)
    .then(() => alert("senha copiada com sucesso"));
}

buttonElement.addEventListener("click", generatePassword);

password.addEventListener("click", copyPassword);
