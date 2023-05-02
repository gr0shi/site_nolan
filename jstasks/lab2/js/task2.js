function foo() {
    var str = "Привет"
    var num = 123
    var flag = true
    var txt = '"true"'
    var a = prompt("Введите значение: ", '')
    while (a == str) {
        alert(typeof str); break;
    }
    while (a == txt) {
        alert(typeof txt); break;
    }
    while (a == num) {
        alert(typeof num); break;
    }
    while (a == "true") {
        alert(typeof true); break;
    }
}