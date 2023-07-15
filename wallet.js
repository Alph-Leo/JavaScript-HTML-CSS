

const loginForm = document.getElementById('form');

loginForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#emailtag input');
  const passwordInput = document.querySelector('#pasword input');

  // Send a POST request to the login API endpoint
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  });

  if (response.ok) {
    window.location.href = 'wallets.html';
  } else {
    // Handle login error
  }
});
loginForm.init();




























// const form = document.getElementById('form');
// const emailInput = document.getElementById('emailtag').querySelector('input');
// const passwordInput = document.getElementById('pasword').querySelector('input');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = emailInput.value;
//     const password = passwordInput.value;

//     console.log('Email:', email);
//     console.log('Password:', password);

// });

// const LoginForm = {
//     form: document.getElementById('form'),
  
//     emailInput: document.getElementById('emailtag').querySelector('input'),
//     passwordInput: document.getElementById('pasword').querySelector('input'),
  
//     init: function() {
//       this.form.addEventListener('submit', this.handleSubmit.bind(this));
//     },
  
//     handleSubmit: function(event) {
//       event.preventDefault();
  
//       const email = this.emailInput.value;
//       const password = this.passwordInput.value;
  
//       console.log('Email:', email);
//       console.log('Password:', password);
//     }
//   };
  
//   LoginForm.init();
  
















// const form = document.getElementById('form');

// emailInput = document.getElementById('emailtag').querySelector('input');
// passwordInput = document.getElementById('pasword').querySelector('input');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     if(validateEmail(emailInput.value) && passwordValidation(passwordInput.balue)){
//         form.submit;
//     }
// });

// function validateEmail(email) { 
    
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if(emailPattern.test(email)) {
//         return true;

//     } else {
//         alert("invalid email")
//         return false;
//     }

// }

// function passwordValidation(password) {
//     if(password.length >= 8){
//         return true;

//     }else {
//         alert("password must be at least 8 characters")
//         return false;
//     }
// }
// console.log(emailInput, "\n", passwordInput);