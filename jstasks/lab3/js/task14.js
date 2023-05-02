function foo () {
var sumUneven = 0;
var start = +prompt("Введите начало диапазона: ", 0);
var finish = +prompt("Введите конец диапазона: ", 0);
var i = start;
while (i <= finish) {
    if (i % 2 != 0) {
        sumUneven += i;
    } 
    i++;
} 

alert( "Сумма нечетных чисел в диапазоне от " + start + " по " + finish + "= " + sumUneven ); 
}
