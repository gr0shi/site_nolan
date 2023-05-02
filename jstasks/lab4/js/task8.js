// 078
function foo() {
    var n = 1000;
    var num = 0;
    while(n > 49)
    {
        n /= 2;
        num++;
    }
    alert("Полученное число: "+n+", Количество итераций: "+num);

}
