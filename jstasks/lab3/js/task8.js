function foo() {
    var num = +prompt('Введите число от 1 до 4', '');
    switch (num) {
    case 0:
        result = 'весна';
        break;
    case 1:
        result = 'лето';
        break;
    case 2:
        result = 'осень';
        break;
    case 3:
        result = 'зима';
        break;
    }
    alert( result );
}
