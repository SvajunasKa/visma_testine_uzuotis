var Login = function () {
    var form = document.getElementById("form");
    var err = document.getElementsByClassName("err");
    var formBody = document.getElementsByClassName("form-body");

    var submit = function(){
        form.onsubmit = function (e) {
            e.preventDefault();
            var formData = new FormData(this);
            var request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (request.readyState == request.DONE && request.status == 200) {
                    var res = request.responseText;
                    var resParsed = JSON.parse(res);
                    if(resParsed.login == true){
                        formBody[0].innerHTML = "<p>" + resParsed.msg + "</p>";
                    }else {
                        err[0].innerHTML = "<img src='assets/images/icons/warning.png'>" +"<p>" + resParsed.msg + "</p>";
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

