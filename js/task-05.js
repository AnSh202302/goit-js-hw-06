const formEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

formEl.addEventListener("input", addName);

function addName(event) {
  nameEl.textContent = formEl.value;
}
