var forma = document.getElementById("form");
var err = document.getElementsByClassName("err");
var email = document.getElementById("email");
var button = document.getElementById("button");
var pass = document.getElementById("password");
var inputs = document.getElementsByTagName("input");

forma.onsubmit= function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == request.DONE && request.status == 200) {
            var res = request.responseText;
            var xxx = JSON.parse(res);
            if(xxx.login == true){
                forma.innerHTML = xxx.msg;
            }else {
               err[0].innerText = xxx.msg;
            }
        }
    };
    request.open("POST", 'login.php');
    request.send(formData);
};

Object.values(inputs).forEach(function (e) {
    e.oninput = function () {
        if(validateEmail(email.value) && pass.value != ""){
            button.removeAttribute("disabled")
        }
    }
});




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
