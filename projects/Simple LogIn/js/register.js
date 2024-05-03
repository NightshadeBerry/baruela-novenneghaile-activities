function register () {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
    if(username=== "" || password=== "" || name=== ""){
        document.getElementById("error").innerHTML ="All textbox are required!";
    }
    else{
        document.getElementById("error").innerHTML ="Welcome " + username;
    }
     alert(username);
     alert(name);
     alert(password);
}
function registered () {
    alert("You clicked Already Registered");
}