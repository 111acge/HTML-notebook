var img = document.getElementById("img")[0];
img.flag = 0;
var mydiv = document.getElementById("mydiv");
window.setInterval(function (e) {
    mydiv.style.left = mydiv.offsetLeft + 5 + "px";
    mydiv.style.top = mydiv.offsetTop + 2 + "px";
    if (img.flag == 0) {
        img.src = "img/2.jpg";
        img.flag = 1;
    } else {
        img.src = "img.1.jpg";
        img.flag = 0;
    }
}, 10);