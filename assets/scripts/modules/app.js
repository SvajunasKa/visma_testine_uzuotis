var button = document.getElementById("button");
var forma = document.getElementById("form");

forma.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == request.DONE && request.status == 200) {
            //forma.innerHTML = request.responseText;
            var res = request.responseText;
            var xxx = JSON.parse(res);
            if(xxx['succsess'] == true){
                console.log('teisingai')
            }else {
                console.log('klaida')
            }
        }
    };
    request.open("POST", 'login.php');
    request.send(formData);
});


