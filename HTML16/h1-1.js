var sounds = [130, 147, 165, 175, 196, 220, 246, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988];
var ctx;

function setContext() {
    if (!ctx) {
        ctx = new AudioContext();//get a audio ctx
    }
}

function makeSound(index) {
    setContext();
    var osc = ctx.createOscillator();//get a OSC
    var g = ctx.createGain();
    osc.connect(g);
    osc.frequency.value = sounds[index];
    var duration = 1.5;
    g.connect(ctx.destination);
    g.gain.value = 0;
    osc.start();
    g.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 0.01);
    osc.stop(ctx.currentTime + duration);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
}

//var cont = document.getElementById("cont");
var lis = document.getElementsByTagName("li");

function changerColor(lis) {
    lis.style.background = "gray";
    setTimeout(function () {
        lis.style.background = "white";
    }, 100)
}

for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function (e) {
        changerColor(e.target);
        makeSound(e.target.index);
    }

}
window.onkeydown = function (e) {
    console.log(e);
    //  alert(e.key);
    var selector = "li[id=\"" + e.key + "\"]";
    var li = document.querySelector(selector);
    if (li) {
        changerColor(li);
        makeSound(li.index);
    } else {
    }
};






