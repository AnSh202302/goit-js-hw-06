const formEl = document.querySelector("#validation-input");

formEl.addEventListener("blur", onFormBlur);
function onFormBlur(event) {
  if (formEl.value.length === Number(formEl.dataset.length)) {
    formEl.classList.add("valid");
    formEl.classList.remove("invalid");
    return;
  } else {
    formEl.classList.add("invalid");
    // formEl.classList.remove("valid");
  }
}
