// 159
function foo () {
    var inEven = function(numbr) {
        var numbr;
        if (numbr % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    numbr = prompt("Введите число для проверки на четность:")
    alert(inEven(numbr))
}