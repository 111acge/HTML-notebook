/*var num = Math.random();
num = num * 3;
num = Math.floor(num);
var img = document.createElement("img");
img.src = "img/1.png";
var body = document.getElementsByTagName("body")[0];
body.appendChild(img);*/

window.setInterval(function () {
    var num = Math.random();
    num = num * 3 + 1;
    num = Math.floor(num);
    var img = document.createElement("img");
    img.src = "img/" + num + ".png";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(img);
}, 1000);