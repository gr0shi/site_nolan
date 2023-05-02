function foo() {
    var a = prompt('Введите число а', '');
    var b = prompt('Введите число b', '');
    var c = prompt('Введите число c', '');
    
    if (a >= b && a >= c) {
    alert( "Максимальное число " + a );
    }
    else if (b >= a && b >= c) {
    alert( "Максимальное число " + b );
    }
    else {
    alert( "Максимальное число " + c );
    }
} 