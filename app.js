const regex = /[@.]/gm;
const input = document.querySelector(".email");
const input_error_text = document.querySelector(".input-error-text");
const main = document.querySelector("main");
const success = document.querySelector(".success");
const companyemail = document.querySelector(".companyemail");

function send(event) {
  event.preventDefault();
  if (isValidEmail(input.value)) {
    main.style.display = "none";
    success.style.display = "flex";
    companyemail.innerHTML = input.value;
  }
}
function back(event) {
  event.preventDefault();
  main.style.display = "flex";
  success.style.display = "none";
}

function isValidEmail(value) {
  if (value.indexOf("@") == -1 || value.indexOf(".") == -1) {
    input_error_text.style.display = "block";
    input.classList.add("input-error-state");
    return false;
  } else {
    input_error_text.style.display = "none";
    input.classList.remove("input-error-state");
    return true;
  }
}

input.addEventListener("keyup", (data) => {
  const value = data.target.value;
  isValidEmail(value);
});
