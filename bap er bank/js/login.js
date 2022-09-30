document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // get Password
    // a. set id on the html
    // b.get The element
    // c.get The value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email==='romen@gmail.com' && password == 12345){
        window.location.href ='bank.html';
    }
    else{
        alert('sorry')
    }
})