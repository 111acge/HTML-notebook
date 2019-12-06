var bar = {
    element: document.getElementsByClassName("bar-content")[0],
    width: 0,    //width%
    timer: null,
    dis: 1,
    start: function () {
        var _this = this;
        timer = setInterval(function () {
                _this.width += _this.dis;
                _this.element.style.width = _this.width + "%";
                if (_this.width === 100 || _this.width === 0) {
                    _this.dis = -_this.dis;
                }
            }
            , 10);
    },
    stop: function () {
        clearInterval(timer);
    }
};
window.onmousedown = function () {
    bar.start();
};
window.onmouseup = function () {
    window.onmousedown = function () {
        bar.stop();
    }
};