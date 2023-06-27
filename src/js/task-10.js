const inputEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
// const btnCreate = document.querySelector("button[data-create]");
// const btnDestroy = document.querySelector("button[data-destroy]");
const btnCreate = inputEl.children[1];
const btnDestroy = inputEl.children[2];

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = inputEl.children[0].value;
  const firstSize = 50;
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    const size = firstSize + i * 10;
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px`;
    boxesEl.append(divBox);
  }
}

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
  inputEl.children[0].value = "";
}
