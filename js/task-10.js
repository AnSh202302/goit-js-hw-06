// Завдання 10 (виконувати не обов'язково)

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

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
  let boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    const size = firstSize + i * 10;
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin-bottom: 10px`;
    boxesArr.push(divBox);

    // boxesEl.append(divBox);
  }

  boxesEl.append(...boxesArr);
}

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
  inputEl.children[0].value = "";
}
