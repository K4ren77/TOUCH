const touchArea = document.getElementById("touch-area");
const counter = document.getElementById("counter");

const colors = {
  1: "red",
  2: "purple",
  3: "blue",
  4: "green",
  5: "yellow",
  6: "orange",
  7: "pink",
  8: "cyan",
  9: "brown",
  10: "black"
};

function updateCounter(event) {
  const fingers = event.touches.length;

  counter.textContent = fingers;

  if (fingers >= 1 && fingers <= 10) {
    document.body.style.backgroundColor = colors[fingers];
  } else {
    document.body.style.backgroundColor = "white";
  }
}

touchArea.addEventListener("touchstart", updateCounter, { passive: false });
touchArea.addEventListener("touchmove", updateCounter, { passive: false });
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);
