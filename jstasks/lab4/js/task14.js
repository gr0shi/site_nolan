// 134
function foo () {
    var abc = function (a, b, c) {
        return (a - b) / c;
    }
    var a = prompt("Введите значение a:")
    var b = prompt("Введите значение b:")
    var c = prompt("Введите значение c:")
    alert(abc(a, b, c));
}
