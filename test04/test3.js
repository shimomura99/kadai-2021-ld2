function add(a, b) {
    return a + b
}
const result = add(897, 226)
console.log(result)
//node test04/test3.js

function func1() {
    console.log("hello")
}
const result1 = func1()
console.log(result1)

function func2() {
    console.log(1)
    return        //returnで終了
    console.log(2)
}
