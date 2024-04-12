const numberInput = document.querySelector("#phone-input");
const submitBtn = document.querySelector("#submit-btn");

numberInput.addEventListener("keyup", () => {
  numberInput.value.length > 0
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
});
