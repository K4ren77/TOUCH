
const touchArea = document.getElementById("touch-area");
const counter = document.getElementById("counter");

const colors = {
  1: "#ff0000",   // Rojo
  2: "#800080",   // Morado
  3: "#0000ff",   // Azul
  4: "#008000",   // Verde
  5: "#ffff00",   // Amarillo
  6: "#ffa500",   // Naranja
  7: "#ff69b4",   // Rosado
  8: "#00ffff",   // Cyan
  9: "#a52a2a",   // Marrón
  10: "#000000"   // Negro
};

function updateCounter(event) {
  const fingers = event.touches.length;

  counter.textContent = fingers;

  if (fingers >= 1 && fingers <= 10) {
    touchArea.style.backgroundColor = colors[fingers];
  } else {
    touchArea.style.backgroundColor = "white";
  }
}

touchArea.addEventListener("touchstart", updateCounter, { passive: true });
touchArea.addEventListener("touchmove", updateCounter, { passive: true });
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);

