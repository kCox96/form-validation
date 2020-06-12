// instantiate variables after DOM content loaded to avoid errors
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const repPassword = document.getElementById('repPassword');

  // prevent form from being submitted unless inputs are validated
  form.addEventListener('submit', e => {
    e.preventDefault();


    validateInputs();
  });

});



// function that validates all inputs
const validateInputs = () => {
  validatefName();
  validatelName();
  validateEmail();
  validatePassword1();

};

// function to validate first name
const validatefName = () => {
  // get fname value and remove whitespace
  let fnameValue = fname.value.trim();
  // if fname value is blank show error
  if (fnameValue === '' || fnameValue === null) {

    setErrorFor(fname, 'First name cannot be blank');
  } else {

    setSuccessFor(fname);
  }

};

// function to validate last name
const validatelName = () => {
  // get lname value and remove whitespace
  let lnameValue = lname.value.trim();
  // if lname is blank show error
  if (lnameValue === '' || lnameValue === null) {
    setErrorFor(lname, 'Last name cannot be blank');
  } else {
    setSuccessFor(lname);
  }
};

// function to validate email
const validateEmail = () => {
  // get email value and remove whitespace
  let emailValue = email.value.trim();
  // if email is blank show error
  if (emailValue === '' || emailValue === null) {
    setErrorFor(email, 'You must enter your email');
    // if email is not valid against regex show error
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Please enter a valid email address');
  } else {
    setSuccessFor(email);
  }

};

// function to validate first password
const validatePassword1 = () => {
  // get password value and trim whitespace
  let passwordValue = password.value.trim();

  // regex variables
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let specialChar = /[!|@|#|$|%|^|&|*|(|)|-|_]/g;
  let minLength = 8;


  // if password is blank show error
  if (passwordValue === '' || passwordValue === null) {
    setErrorFor(password, 'Password must not be blank');
  }
  // if password is less than minLength value show error
  else if (passwordValue.length < minLength) {
    setErrorFor(password, 'Password must be at least 8 characters');
  }
  // if password does not contain lower case chars show error
  else if (!passwordValue.match(lowerCaseLetters)) {
    setErrorFor(password, 'Password must contain at least 1 lower case character');

  }
  // if password does not contain upper case chars show error
  else if (!passwordValue.match(upperCaseLetters)) {
    setErrorFor(password, 'password must contain at least 1 upper case character');
  }
  // if password does not contain a number show error
  else if (!passwordValue.match(numbers)) {
    setErrorFor(password, 'password must contain at least 1 number');
  }
  // if password does not contain special chars show error
  else if (!passwordValue.match(specialChar)) {
    setErrorFor(password, 'password must contain at least 1 special character');
  } else {
    setSuccessFor(password)
  }

  validatePassword2(passwordValue);
};

// function to validate second password
const validatePassword2 = passwordValue => {
  // get repPassword value and trim whitespace
  let repPasswordValue = repPassword.value.trim();
  // if repPassword is blank show error
  if (repPasswordValue === '' || repPasswordValue === null) {
    setErrorFor(repPassword, 'You must confirm your password');
  }
  // if repPassword does not match password show error
  else if (repPasswordValue !== passwordValue) {
    setErrorFor(repPassword, 'Passwords must match');
  } else {
    setSuccessFor(repPassword);
  }
};

/* helper functions */

// function to display error message and set css error class
const setErrorFor = (input, msg) => {
  let formControl = input.parentElement;
  let small = formControl.querySelector('small');
  small.innerText = msg;
  formControl.className = 'form-control error';
};

// function to set success css class
const setSuccessFor = input => {
  let formControl = input.parentElement;
  formControl.className = 'form-control success';
};

// function to validate email against regex
const isEmail = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
