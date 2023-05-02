function foo() {
    if(confirm ("Нажмите ОК если хотите ввести число или Отмена"))  {
        var num = prompt("Введите число: ");
        alert("Вы ввели число " + num);
    } else (alert("Вы нажали отмена"))
}