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
