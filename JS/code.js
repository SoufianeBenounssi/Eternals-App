

function Login() {

    var userEmail = "soufiane.benounssi@gmail.com";
    var userPass = "Ben@1197";
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;
    
    if(email == userEmail){
        if (password == userPass) {
            location.replace("home.html");
        }else{
            document.querySelector(".output").innerHTML = "The Password is Wrong <br> Try again";
        }
    }else {
        document.querySelector(".output").innerHTML = "No user with this <br> email address"
    }
    
    




}