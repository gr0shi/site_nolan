function foo () {
    var height = +prompt("Введите высоту равнобедренного треугольника: ", "");
    for (var i = 0; i < height; i++)
    {
    for (var j = 1; j < height - i; j++) {
    document.write(' ');
    } 
    for (var j = height - 2 * i; j <= height; j++) {
    document.write('*');
    } 
    document.write("<br>"); 
    }
}