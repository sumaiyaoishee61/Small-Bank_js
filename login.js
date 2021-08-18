document.getElementById('login-submit').addEventListener
('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail== 'sontan@baap.com' && userPassword=='1234'){
          window.location.href = 'bankroom.html';
    }
});
//handdle deposit event button
