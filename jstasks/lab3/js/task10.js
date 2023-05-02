function foo () {
    var num = 30;
    switch (num) {
    case 25:
        alert( '25' );
        break;
    case 10:
    case 20:
    case 30:
    case 40:
        alert( 'От 1 до 4-х десятков' );
        break;
    default:
    alert( 'Числа нет в базе' );
    }
}