const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const value = document.querySelector("#value");

let counterValue = 0;

buttonDecrement.addEventListener("click", getDecrement);
buttonIncrement.addEventListener("click", getIncrement);

function getDecrement(evt) {
  counterValue -= 1;
  value.textContent = counterValue;
}

function getIncrement(evt) {
  counterValue += 1;
  value.textContent = counterValue;
}
