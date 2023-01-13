const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const body = document.body;

h1.classList.add("blue", "bg", "center", "padding");
h1.classList.remove("bg", "blue");

button.addEventListener("click", function () {
  button.classList.toggle("bg");
  body.classList.toggle("bg_gray");
  h1.classList.toggle("blue");
});
