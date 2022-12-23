
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');


function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email address is required';
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
};

function validatePassword(){
    var password = document.getElementById('contact-password').value;
    if(password.length == 0){
        passwordError.innerHTML = 'password cannot be blank';
        return false;

    }
    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
        passwordError.innerHTML = 'password is invalid'
        return false;
    }

    passwordError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    input.classList.add('active');
    input.classList.remove('focus');
    return true;
};

function validateForm(){
    if(!validateEmail() || !validatePassword()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill your details to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }

}

//password open/close option
var state = false;
function toggle(){
    if (state){
        document.getElementById('contact-password').setAttribute("type", "password");
        document.getElementById('hide1').style.color = '#7a797e';
        state = false;
    }
    else{
        document.getElementById('contact-password').setAttribute("type", "text");
        document.getElementById('hide1').style.color = '#5887ef';
        state = true;
    }
}

var state1 = false;
function toggle1(){
    if (state1){
        document.getElementById('contact-password1').setAttribute("type", "password");
        document.getElementById('hide2').style.color = '#7a797e';
        state1 = false;
    }
    else{
        document.getElementById('contact-password1').setAttribute("type", "text");
        document.getElementById('hide2').style.color = '#5887ef';
        state1 = true;
    }
}


// Login function

function myFunction(){

    var myEmail = document.getElementById("contact-email").value;
    var myPass = document.getElementById("contact-password").value;

    if(myEmail=="maivella@gmail.com" && myPass=="Maivella123@"){

        e.preventDefault();
        window.location.assign('http://127.0.0.1:5500/dashboard.html');
        alert("Login successfully");
        return;
    }else{
        alert("wrong details");
        return;
    }
}

