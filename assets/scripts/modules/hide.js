var Hide = function () {
    var button = document.getElementsByClassName("btn");
    var cookie = document.getElementsByClassName("cookie");
    var hide_cookie = function () {
        button[0].onclick = function () {
           cookie[0].classList.add("hide");
        }
    };
    return{
        init:function () {
            hide_cookie();
        }
    }
}();