// enable submit button when it has a value
const numberInput = document.getElementById("#phone-input");
const submitBtn = document.getElementById("#submit-btn");

numberInput.addEventListener("keyup", () => {
  numberInput.value.length > 0
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
});
