const form = document.querySelector('form');
const passwordMatchDiv = document.querySelector('.password-match');

form.addEventListener('submit', (event) =>{
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword){
        event.preventDefault();
        console.log('passwords dont match');
        passwordMatchDiv.style.visibility = 'visible';
        passwordMatchDiv.style.height = 'auto';
        return;
    }
    console.log('submitting');
    form.submit();
});