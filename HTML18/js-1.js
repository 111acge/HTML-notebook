function bindEvent() {
    var container = document.getElementsByClassName("container")[0];
    var lastX = 0, lastY = 0, disX, disY;
    var royX = 0, royY = 0;
    document.onmousedown = function (e) {
        lastX = e.pageX;
        lastY = e.pageY;
        document.onmousemove = function (e) {
            disX = e.pageX - lastX;
            disY = e.pageY - lastY;
            royX = royX + disX * 0.02;
            royY = royY + disX * 0.02;
            container.style.transform = "rotateX(" + royX + "deg) rotateY(" + royY + "deg)";
        }
    };
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}

bindEvent();