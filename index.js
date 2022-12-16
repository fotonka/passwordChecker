const inputPassword = document.querySelector(".password");
const inputText = document.querySelector(".input-text");

inputPassword.onkeyup = function checkPassword() {
  let lowerCaseLetters = /[a-z]/g;
  let higherCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (
    inputPassword.value.match(lowerCaseLetters) &&
    inputPassword.value.match(higherCaseLetters) &&
    inputPassword.value.match(numbers) &&
    inputPassword.value.length >= 8
  ) {
    inputPassword.classList.remove("password");
    inputPassword.classList.remove("incorrect");
    inputPassword.classList.remove("middle");
    inputPassword.classList.add("correct");
    inputText.textContent = "Great password";
    inputText.style.color = "#0f4a1e";
  } else if (
    (inputPassword.value.length >= 8 &&
      inputPassword.value.match(lowerCaseLetters) &&
      inputPassword.value.match(higherCaseLetters)) ||
    (inputPassword.value.length >= 8 &&
      inputPassword.value.match(numbers) &&
      inputPassword.value.match(higherCaseLetters)) ||
    (inputPassword.value.length >= 8 &&
      inputPassword.value.match(numbers) &&
      inputPassword.value.match(lowerCaseLetters))
  ) {
    inputPassword.classList.remove("password");
    inputPassword.classList.remove("incorrect");
    inputPassword.classList.remove("correct");
    inputPassword.classList.add("middle");
    inputText.textContent = "Not bad password";
    inputText.style.color = "#e6ed1a";
  } else {
    inputPassword.classList.add("incorrect");
    inputPassword.classList.remove("correct");
    inputPassword.classList.remove("password");
    inputPassword.classList.remove("middle");
    inputText.textContent = "Bad password";
    inputText.style.color = "red";
  }
};
