var timer;
var i = 0;
var n = 0;

function shounumber() {

    document.getElementById("number").innerHTML = ++i;
}

window.onload = function () {
    timer = window.setInterval("shounumber()", "50");
};


function onclickfunction() {
    if (i === 88) {

        document.getElementById("number").innerHTML = "88,you win";
    }
    window.clearInterval(timer);
}