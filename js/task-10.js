function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  createBoxes(input.value);
  input.value = "";
});

buttonDestroy.addEventListener("click", handleDestroy);

function createBoxes(amount) {
  const arr = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const box = `<div class="box" style="width: ${size}px; height: ${size}px; margin: 20px; background-color: ${getRandomHexColor()};"></div> `;
    arr.push(box);
  }
  boxes.insertAdjacentHTML("beforeend", arr.join(""));
}

function handleDestroy() {
  boxes.innerHTML = "";
  input.value = "";
}
