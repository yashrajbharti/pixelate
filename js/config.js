const checkbox = document.querySelector("md-checkbox");
const range = document.querySelector("md-slider");
const pixelated = document.querySelector("image-pixelated");

checkbox.addEventListener("change", () => {
  pixelated.setAttribute("lego-effect", checkbox.checked);
});

range.addEventListener("change", () => {
  pixelated.setAttribute("lego-size", range.value);
  pixelated.setAttribute("pixel-size", range.value);
});
