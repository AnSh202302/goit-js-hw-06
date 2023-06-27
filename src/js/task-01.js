const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

allCategories.forEach(function (element, index) {
  console.log("Category: ", element.children[0].textContent);
  console.log("Elements: ", element.children[1].children.length);
});
