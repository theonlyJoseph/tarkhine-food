const numberInput = document.getElementById("#phone-input");
const submitBtn = document.getElementById("#submit-btn");

const otpContainer = document.getElementById('otpContainer');
const inputArray = [...document.querySelectorAll('#otpInput')];

// // enable submit button when it has a value
// numberInput.addEventListener("keyup", () => {
//   numberInput.value.length > 0
//     ? (submitBtn.disabled = false)
//     : (submitBtn.disabled = true);
// });

const handleKeyDown =  (e) => {
  if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault();
  }
};

const handleFocus = (e) => {
  e.target.select();
}

const handlePaste = (e) => {
  e.preventDefault()
  const pastedText = e.clipboardData.getData('text');
  if(!/^[0-9]{4}$/.test(pastedText) ) {
  
    return
  }
  const digits = pastedText.split('')  
  inputArray.forEach((input, index) => input.value = digits[index])
}


const handleKeyUp = (e) => {
   const index = inputArray.indexOf(e.target);
   console.log(index, inputArray.length - 1);
   if(e.key === 'ArrowRight' && index < inputArray.length - 1) {
      inputArray[index + 1].focus();
    }
}

inputArray.forEach(input => {
  input.addEventListener('keydown', handleKeyUp);
  input.addEventListener('keydown', handleKeyDown);
  input.addEventListener('focus', handleFocus);
  input.addEventListener('paste', handlePaste);
})