function foo() {
    const arr = [1, 2, 3, 4, 5]
    arr.splice (1, 0, "a");
    arr.splice (2, 0, "b");
    arr.splice (6, 0, "c");
    arr.splice (8, 0, "e");
    console.log(arr)
}