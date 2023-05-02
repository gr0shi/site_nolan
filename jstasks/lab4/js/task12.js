// 111
function foo () {

    var month = [
        "Январь",
        "Февраль",
        "Март", 
        "Апрель", 
        "Май",
        "Июнь",
        "Июль",
        "Август", 
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
        "January",
        "February", 
        "March" ,
        "April" ,
        "May",
        "June",
        "July" ,
        "August", 
        "September",
        "October",
        "November",
        "December"
        ]
        var d = new Date();
        var lang = prompt("Введите значение ru или en")
        if (lang == "ru")
            alert(month[d.getMonth()],"<br>");
        else if (lang == "en")
            alert(month[d.getMonth()+12],"<br>");
}