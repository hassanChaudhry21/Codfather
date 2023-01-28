// const password = document.getElementById('password')
// const background = document.getElementById('background')
// 
// password.addEventListener('input', (e) => {
  // const input = e.target.value
  // const length = input.length
  // const blurValue = 15 - length * 2
  // background.style.filter = `blur(${blurValue}px)`
// })
// 
// const panels = document.querySelectorAll('.panel')
// 
// panels.forEach(panel => {
    // panel.addEventListener('click', () => {
        // removeActiveClasses()
        // panel.classList.add('active')
    // })
// })
// 
// function removeActiveClasses() {
    // panels.forEach(panel => {
        // panel.classList.remove('active')
    // })
// }
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const regpassword = document.getElementById('regpassword')
const password2 = document.getElementById('password2')

function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input){
  const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|)/
  if(regularExpression.test(input.value.trim())){
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid')
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}



function checkLength(input, min , max) {
  if(input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Password Does Not Match')
  }
}



function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username,email,regpassword,password2]);
  checkLength(username, 3, 15);
  checkLength(regpassword, 6, 20)
  checkEmail(email)
  checkPasswordMatch(regpassword,password2)
});


  
  
  
  
  

  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

