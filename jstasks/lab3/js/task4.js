function foo() {
    var x = 4;
    var y = 9;
    var R = 10;
    var L = Math.sqrt(x*x + y*y);
    var massage = L > R ? "Точка А лежит вне окружности" : "Точка А лежит внутри окружности";
    alert( massage );
}