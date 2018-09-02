var Login = function () {
    var form = document.getElementById("form");
    var err = document.getElementsByClassName("err");

    var submit = function(){
        form.onsubmit = function (e) {
            e.preventDefault();
            var formData = new FormData(this);
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == request.DONE && request.status == 200) {
                    var res = request.responseText;
                    var xxx = JSON.parse(res);
                    if(xxx.login == true){
                        form.innerHTML = xxx.msg;
                    }else {
                        err[0].innerText = xxx.msg;
                    }
                }
            };
            request.open("POST", "login.php");
            request.send(formData);
        };
    };
    return {
        init: function () {
            submit();
        }
    }

}();


var Validation = function(){
    var email = document.getElementById("email");
    var button = document.getElementById("button");
    var pass = document.getElementById("password");
    var inputs = form.getElementsByTagName("input");

    var input_validation = function(){
        Object.values(inputs).forEach(function (e) {
            e.oninput = function () {
                if(validateEmail(email.value) && pass.value != ""){
                    button.removeAttribute("disabled");
                }
            };
        });
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    };
    return {
        init: function () {
            input_validation();
        }
    }
}();

Validation.init();
Login.init();
