const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword){
        event.preventDefault();
        console.log('passwords dont match');
        return;
    }
    console.log('submitting');
    form.submit();
});