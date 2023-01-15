const button = document.querySelector("button");
const body = document.body;

button.addEventListener("click", (e) => {
  body.classList.toggle("offsite-is-open");
});
