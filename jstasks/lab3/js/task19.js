function foo () {
    var arr = ["a", "b"];

    arr.push(function() {
    alert( this );
    })
    
    arr[2]();
}