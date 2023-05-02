function foo () {
    var day = +prompt('Введите число от 1 до 31', '');
    switch (true) {
    case day <= 10:
        alert( 'Первая декада' );
        break;
    case day >= 11 && day <= 20:
        alert( 'Вторая декада' );
        break;
    case day >= 21 && day <= 31:
        alert( 'Третья декада' );
        break;
    default: 
    alert( 'Такого дня нет' );
    }
}
