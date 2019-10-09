var sheep = document.getElementById("sheep");
sheep.backPosition = 0;
sheep.top = 0;
sheep.bottomno = 0;
sheep.rightno = 0;
var divc = document.getElementById("sheep")[0];
window.setInterval(
    function () {
        sheep.backPosition = sheep.backPosition - 164;
        if (sheep.rightno >= 600 || sheep.bottomno >= 600) {
            sheep.bottomno = sheep.bottomno + 0;
            sheep.rightno = sheep.rightno + 0;
        } else {
            sheep.bottomno = sheep.bottomno + 3;
            sheep.rightno = sheep.rightno + 5;
        }
        if (sheep.backPosition <= -1312) {
            sheep.backPosition = 0;
        }
        sheep.style.backgroundPosition = sheep.backPosition + "px" + " " + sheep.top + "px";
        sheep.style.bottom = sheep.bottomno + "px";
        sheep.style.right = sheep.rightno + "px";
    }
    , 100);

window.setInterval(
    function () {
        var bono = floor(Math.random() * 600);
        var rino = floor(Math.random() * 600);
        var img = document.createElement("img");
        img.bottom = bono;
        img.right = rino;
        img.src = "img/sheep.png";
        divc.appendChild(img);
    }
    , 1000);