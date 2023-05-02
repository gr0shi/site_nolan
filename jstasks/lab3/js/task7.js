function foo() {
    var n = prompt('Введите трёхзначное число', '');
    var n_1 = ~~(n/100);
    var n_2 = ~~((n%100)/10); 
    var n_3 = (n%10);
    var sum = n_1 + n_2 + n_3; 
    var mult = n_1 * n_2 * n_3; 
    if (n%2 == 0) { 
    alert( 'Число четное. Сумма цифр: ' + sum );
    }
    else {
    alert( 'Число нечетное. Произведение цифр: ' + mult ); 
    }
}