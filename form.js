document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const repPassword = document.getElementById('repPassword');

  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('preventDefault() called');

    validateInputs();
  });

});




const validateInputs = () => {
  console.log('validateInputs() called');
  validatefName();
  validatelName();

};

const validatefName = () => {
  let fnameValue = fname.value.trim();
  if (fnameValue === '' || fnameValue === null) {
    //show error, add error class
    setErrorFor(fname, 'First name cannot be blank');
  } else {
    // add success class
    setSuccessFor(fname);
  }

};

const validatelName = () => {
  let lnameValue = lname.value.trim();
  if(lnameValue === '' || lnameValue === null){
    setErrorFor(lname, 'Last name cannot be blank');
  } else {
    setSuccessFor(lname);
  }
};

const validateEmail = () => {
  let emailValue = email.value.trim();
};

const validatePassword = () => {
  let passwordValue = password.value.trim();
};

const comparePasswords = (password, repPassword) => {
  if (password === repPassword) {
    return true;
  } else {
    return false;
  }
};

const setErrorFor = (input, msg) => {
  let formControl = input.parentElement;
  let small = formControl.querySelector('small');
  small.innerText = msg;
  formControl.className = 'form-control error';
};

const setSuccessFor = input => {
  let formControl = input.parentElement;
  formControl.className = 'form-control success';
};
