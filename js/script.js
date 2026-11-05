
const touchArea = document.getElementById("touch-area");
const image = document.getElementById("image");

// Imágenes correspondientes a cada cantidad de dedos
const images = {
  0: "img/0.jpg",
  1: "img/1.jpg",
  2: "img/2.jpg",
  3: "img/3.jpg",
  4: "img/4.jpg",
  5: "img/5.webp",
  6: "img/6.jpg",
  7: "img/7.jpg",
  8: "img/8.jpg",
  9: "img/9.jpg",
  10: "img/10.png"
};

// Colores correspondientes a cada cantidad de dedos
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

  // Cambiar la imagen
  image.src = images[fingers];

  // Cambiar el color del fondo
  if (fingers >= 1 && fingers <= 10) {
    touchArea.style.backgroundColor = colors[fingers];
  } else {
    touchArea.style.backgroundColor = "white";
  }
}

// Detectar los eventos táctiles
touchArea.addEventListener("touchstart", updateCounter);
touchArea.addEventListener("touchmove", updateCounter);
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);
