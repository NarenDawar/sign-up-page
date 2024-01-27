let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let message = document.getElementById("message");

var check = function() {
    if(document.getElementById("pass").value == document.getElementById("cpass").value) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Matching";
    }

    else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Not matching";
    }
}