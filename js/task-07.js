const controlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

controlEl.addEventListener("input", onControlClick);

function onControlClick(event) {
  console.log((textEl.style.fontSize = `${controlEl.value}px`));
}
