let slideBar = document.querySelector("#slide");
let btn_bey = document.getElementById("btn_bey");

let sizePass = document.getElementById("valor");

let containerPass = document.getElementById("container_password");
let password = document.getElementById("password");

let mixCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%?";

let newPass = "";

sizePass.innerText = slideBar.value;

slideBar.oninput = function () {
  sizePass.innerText = slideBar.value;
};

function generatePass() {
  let pass = "";

  for (let i = 0, n = mixCharacters.length; i < slideBar.value; i++) {
    pass += mixCharacters.charAt(Math.floor(Math.random() * n));
  }
  containerPass.classList.remove("hide");
  password.innerHTML = pass;
  newPass=pass
}
