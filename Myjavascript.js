const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);

function validateUsername() {
  const usernameValue = usernameInput.value.trim();

  if (usernameValue.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters long';
  } else {
    usernameError.textContent = '';
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value;

  if (passwordValue.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
  } else {
    passwordError.textContent = '';
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  if (usernameInput.value.trim().length < 3 || passwordInput.value.length < 8) {
    event.preventDefault(); // Prevent form submission
    alert('Form submission prevented due to validation errors');
  }
});

