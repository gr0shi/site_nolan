function foo () {
    function sumInput() {

        var numbers = [];
    
        while (true) {
    
        var value = prompt("Введите значение", 0);
    
        if (value === "" || value === null || !isFinite(value)) break;
    
        numbers.push(+value);
        }
    
        var sum = 0;
        for (let number of numbers) {
        sum += number;
        }
        return sum;
    }
    
    alert( sumInput() );
}