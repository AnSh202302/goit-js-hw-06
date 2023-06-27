const textEl = document.querySelector(".widget");
const textColor = document.querySelector(".color");
// console.dir(textEl.children[0].children.textContent); ?????

textEl.children[1].addEventListener("click", onChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChange(event) {
  textColor.textContent = getRandomHexColor();
  textEl.parentElement.style.backgroundColor = textColor.textContent;
}
