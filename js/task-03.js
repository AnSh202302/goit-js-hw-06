const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const imgEl = document.querySelector(".gallery");
imgEl.classList.add("img-task-3");
console.log(imgEl.classList);
const makeImgCartMarkup = ({ url, alt }) => {
  return `<li><img src = ${url}, alt = ${alt}, width = 100% ></img></li>`;
};
const makeImgCarts = images.map(makeImgCartMarkup).join(" ");
imgEl.insertAdjacentHTML("beforeend", makeImgCarts);
console.log(imgEl);
//console.log(makeImgCartMarkup(images[0]));
// const listEl = document.querySelector(".gallery");
// const element = images.map((option) => {
//   const itemEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   imgEl.url = option.url;
//   imgEl.alt = option.alt;
//   itemEl.appendChild(imgEl);
//   return itemEl;
// });

// console.log(element);
