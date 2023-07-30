const form = document.querySelector(".login-form");

form.addEventListener("submit", chekForm);

function chekForm(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
  } else {
    console.log({ Email: email.value, password: password.value });
    evt.currentTarget.reset();
  }
}
