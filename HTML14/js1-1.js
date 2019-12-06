var mul = 2;
var listImgs = document.getElementsByClassName("listImg");
var showImg = document.getElementsByClassName("showImg")[0];
var bigImg = document.getElementsByClassName("bigImg")[0];
var moveBox = document.getElementsByClassName("moveBox")[0];
var content = document.g
for (var i = 0; i < listimgs.length; i++) {
    listImgs[i].index = i;
    listImgs[i].onmousemove = function (e) {
        show(e.srcElement.index);
    }
}

function createmove() {
    moveWidth = 500 / mul;
    moveBox.style.width = moveWidth + "px";
    moveBox.style.height = moveWidth + "px";
}

createmove();

function show(i) {
    var src = listimg[i].getAttribute('src');
    showImg.innerHTML = "<img src=" + src + "";
    bigImg.style.backgroundImage = "url(" + src + ")";
}