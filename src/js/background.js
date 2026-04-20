const solen = document.querySelector(".solen");
const baggrunde = document.querySelectorAll(".background");

solen.addEventListener("click", transform);

function transform() {
  console.log("du har klikket på knappen og funktionen kører");
  baggrunde.forEach((bg) => bg.classList.toggle("transform"));
}
