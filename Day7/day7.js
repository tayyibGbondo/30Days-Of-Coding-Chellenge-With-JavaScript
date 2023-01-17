const button = document.querySelector("button");
const body = document.body;
const close = document.querySelector("h4");

button.addEventListener("click", () => {
  body.classList.add("is-open");
});

//close section
close.addEventListener("click", () => {
  body.classList.remove("is-open");
});

//Array
