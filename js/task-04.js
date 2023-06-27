const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);
function onDecrementBtnClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log(counterValue);
}

incrementBtn.addEventListener("click", onIncrementBtnClick);
function onIncrementBtnClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log(counterValue);
}
