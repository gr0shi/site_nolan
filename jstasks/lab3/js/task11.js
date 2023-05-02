function foo () {
    var num1 = +prompt('Введите целое число: ', '');
    var num2 = 0, digit;
    while (num1 > 0) {
        digit = num1 % 10; 
        num1 = num1 / 10 ^ 0;
        num2 = num2 * 10;
        num2 = num2 + digit;
    }
    alert( '"Обратное" ему число:' + num2 );
}