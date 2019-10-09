var clock = document.getElementById("clock");
function realsystemtime() {
    var now = new Date();
    var year = now.getFullYear();//年
    var mouth = now.getMonth();//月
    mouth += 1;
    var date = now.getDate();//日期
    var day = now.getDay();//星期
    var hour = now.getHours();//小时
    var minu = now.getMinutes();//分钟
    var sec = now.getSeconds();//秒
    var arr_week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var week = arr_week[day];
    var time = "今天是" + year + "年" + mouth + "月" + date + "日" + week + "。当前时间为：" + hour + ":" + minu + ":" + sec;
    clock.innerHTML = time;
}

window.onload = function () {
    window.setInterval("realsystemtime()", "1000")
};
