
const touchArea = document.getElementById("touch-area");
const image = document.getElementById("image");

const colors = {
  1: "#ff0000",
  2: "#800080",
  3: "#0000ff",
  4: "#008000",
  5: "#ffff00",
  6: "#ffa500",
  7: "#ff69b4",
  8: "#00ffff",
  9: "#a52a2a",
  10: "#000000"
};

function updateCounter(event) {
  const fingers = event.touches.length;

  // Cambiar la imagen según los dedos
  image.src = `img/${fingers}.png`;

  // Cambiar el color del fondo
  if (fingers >= 1 && fingers <= 10) {
    touchArea.style.backgroundColor = colors[fingers];
  } else {
    touchArea.style.backgroundColor = "white";
  }
}

touchArea.addEventListener("touchstart", updateCounter);
touchArea.addEventListener("touchmove", updateCounter);
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);
