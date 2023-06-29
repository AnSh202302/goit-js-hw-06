// Завдання 5

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
//   <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const formEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

formEl.addEventListener("input", addName);

function addName(event) {
  if (formEl.value === "") {
    nameEl.textContent = "Anonymous";
    return;
  }
  nameEl.textContent = formEl.value.trim();
}
