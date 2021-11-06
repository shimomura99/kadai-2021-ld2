//スコープの便利さ

let count = 0

const increment = () => {
    count = count + 1
    console.log("現在" + count + "回")
}
increment()
increment()
increment() //関数の保存