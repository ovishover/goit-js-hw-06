const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

const userAuthentication = {
  email: '',
  password: '',
};

function onSubmitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Заповніть всі поля, будь-ласка!');
  } else {
    userAuthentication.email = email;
    userAuthentication.password = password;

    console.log(userAuthentication);
    form.reset();
  }
}
