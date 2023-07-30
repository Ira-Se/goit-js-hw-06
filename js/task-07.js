const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeFontSize);

function changeFontSize(evt) {
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
