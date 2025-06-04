const text = "MUSTER";
const container = document.getElementById("container");

container.innerHTML = "";

const letters = text.split("").map(char => {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.textContent = char;
  container.appendChild(span);
  return span;
});

let index = 0;
function showNext() {
  letters.forEach(l => {
    l.classList.remove("visible");
    l.classList.remove("heat");
  });
  const current = letters[index];
  current.classList.add("visible");
  current.classList.add("heat");
  setTimeout(() => {
    current.classList.remove("heat");
  }, 80);
  index = (index + 1) % letters.length;
}

setInterval(showNext, 250);
