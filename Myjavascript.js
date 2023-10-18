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
