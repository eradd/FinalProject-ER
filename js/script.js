/*console.log("JS Loaded!");*/

function cardFrontHide() {
  document.getElementById("card-front").classList.add("hide");
}
function cardFrontShow() {
  document.getElementById("card-front").classList.remove("hide");
}

document.getElementById("card-front").addEventListener("click", cardFrontHide);
document.getElementById("card-back").addEventListener("click", cardFrontShow);
