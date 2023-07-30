const form = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

form.input.addEventListener("input", changeOutput);

function changeOutput(evt) {
  if (evt.currentTarget.value.trim() === "") {
    form.output.textContent = "Anonymous";
  } else {
    form.output.textContent = evt.currentTarget.value.trim();
  }
}
