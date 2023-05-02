function foo () {
    var str = 'Эта функция выполняет некое действие';
    var res = [];
    var arr = str.split(' ');
    function ucfirst(word) {
    return word[0].toUpperCase() + word.substr(1);
    }
    for (let i = 0; i < arr.length; i++) {
    res.push(ucfirst(arr[i]));
    }
    console.log(res);
}
