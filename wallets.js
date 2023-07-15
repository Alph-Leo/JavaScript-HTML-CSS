

const signupForm = document.getElementById('form');

signupForm.addEventListener('submit', async function(event) {
  event.preventDefault();

  const firstNameInput = document.querySelector('#first-name input');
  const lastNameInput = document.querySelector('#last-name input');
  const emailInput = document.querySelector('#mailtag input');
  const passwordInput = document.querySelector('#pastag input');

  // Send a POST request to the signup API endpoint
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    }),
  });

  if (response.ok) {
    window.location.href = 'wallet2.html';
  } else {
    // Handle signup error
  }
});
signupForm.init();




















// const form = document.getElementById('form')

// const firstNameInput = document.getElementById("first-name").querySelector('input');
// const lastNameInput = document.getElementById('last-name').querySelector('input');
// const emailInput = document.getElementById('mailtag').querySelector('input');
// const passwordInput = document.getElementById('pastag').querySelector('input');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const FirstName = firstNameInput.value;
//     const LastName = lastNameInput.value;
//     const email = emailInput.value;
//     const password = passwordInput.value;

//     console.log("First Name: ", FirstName)
//     console.log("Last Name: ", LastName)
//     console.log("Email: ", email)
//     console.log("Password: ", password)
// });



// const userForm = {
//     form: document.getElementById('form'),

//      firstNameInput: document.getElementById("first-name").querySelector('input'),
//      lastNameInput: document.getElementById('last-name').querySelector('input'),
//      emailInput: document.getElementById('mailtag').querySelector('input'),
//      passwordInput: document.getElementById('pastag').querySelector('input'),
   
//     init: function() {
//         this.form.addEventListener('submit', this.handleSubmit.bind(this));

//       },
      
//       handleSubmit: function(event){
//         event.preventDefault();

//         const FirstName = this.firstNameInput.value;
//         const LastName = this.lastNameInput.value;
//         const email = this.emailInput.value;
//         const password = this.passwordInput.value;

//         console.log("First Name: ", FirstName)
//         console.log("Last Name: ", LastName)
//         console.log("Email: ", email)
//         console.log("Password: ", password)
//       }
// };

// userForm.init();

