let loader = document.querySelector(".loader-container");
let page = document.querySelector(".main-content");

window.addEventListener("load", () => {
  loader.classList.add("hidden");
  page.classList.add("visible");
});
