function foo () {
    var users = {
    "John": 28,
    "Mark": 30,
    "David": 25,
    "Richard": 42
    };
    var sum = 0;
    for (var name in users) {
    sum += users[name];
    }
    alert( sum );
}