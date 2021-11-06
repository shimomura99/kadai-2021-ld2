function funcA() {
    console.log("Hello")
}
console.log(typeof funcA)
funcA()

const funcB = funcA //関数を変数に代入
console.log(typeof funcB)
funcB()
//node test04/test4.js

const funcC = function () {console.log("hello!!")} //関数名なしでも可
funcC()

const funcD = () => {console.log("good night")} //functionと一緒(違いがないわけではない)
funcD()