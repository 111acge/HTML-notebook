var mydiv = document.getElementById("mydiv");
mydiv.onmousedown = function (e) {
    mydiv.x = e.pageX;
    mydiv.y = e.pageY;
    console.log("按下坐标,X:" + mydiv.x + "Y:" + mydiv.y);
    document.onmousemove = function (e) {
        console.log("移动坐标,X:" + e.pageX + "Y:" + e.pageY);
        chax = e.pageX - mydiv.x;
        chay = e.pageY - mydiv.y;
        mydiv.style.left = mydiv.offsetLeft + chax + "px";
        mydiv.style.top = mydiv.offsetTop + chay + "px";
        mydiv.x = e.pageX;
        mydiv.y = e.pageY;
    };
    document.onmouseup = function (e) {
        document.onmousemove = null;
    };
};