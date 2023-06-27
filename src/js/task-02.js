const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const element = ingredients.map((option) => {
  const titleList = document.createElement("li");
  titleList.textContent = option;
  titleList.classList.add("item");
  return titleList;
});
console.log(element);
listEl.append(...element);
