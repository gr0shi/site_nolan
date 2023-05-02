function foo1() {
    var a = prompt ("Как вас зовут:  ");
    alert("Вас зовут " + a)
}
function foo2() {
    if(confirm ("Нажмите ОК или Отмена"))  {
        alert("Вы нажали ОК");
    } else (alert("Вы нажали отмена"))
}
function foo3() {
    var a = prompt ("Как вас зовут:  ");
    if (confirm ("Введенное имя правильное?")) {
        alert("Здравтсвуйте, " + a)
    } else (alert ("Введенное вами имя не правильное, повторите попытку."))
}