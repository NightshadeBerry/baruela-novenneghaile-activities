function login () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "Enne";
    var real_password = "2823";
    
    if(username=== "" || password=== ""){
        document.getElementById("error").innerHTML ="All textbox are required!";
    }
    else{
        if(username === real_username && password === real_password) {
            document.getElementById("error").innerHTML ="Welcome " + username;
        }
        else{
        document.getElementById("error").innerHTML ="Invalid username or password";
        }
    }
     alert(username);
     alert(password);
}
function forgot () {
    alert("You clicked Forgot Password");
}