function foo () {
    var n, m;
    n = +prompt("Введите число: ", "");
    m = n % 10;
    n = n/10 ^ 0;
    while (n > 0) {
        if (n % 10 > m) m = n % 10;
        n = n/10 ^ 0;
    }
    alert( "Наибольшее число: " + m );
}