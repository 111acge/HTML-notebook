function jiecheng()
{
    var num=document.getElementById("number").value;
    var result="";
    for (var n = 1;n<=num;n++)
    {
        for (var m=1;m<=n;m++)
        {
            var str=n+"*"+m+"="+n*m+" ";
            result+=str;
        }
        result+="<br>";
    }
    result+="鼠标";
    document.getElementById("result").innerHTML=result;
}
var x=5;
x="hello world";
var cars=["长城","吉利","比亚迪","奇瑞"];
document.getElementById("result").innerHTML=cars;
var poems = new Array();
poems[0]="滕王阁序";
poems[1]="岳阳楼记";
poems[2]="梦游天姥吟留别";
poems[3]="春江花月夜";
document.getElementById("result").innerHTML=poems;