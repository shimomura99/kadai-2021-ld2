const X = "hello!" //スコープは変数の範囲をつくる
{   
    console.log(X)
}
console.log(X) //スコープ外には反映されない

const Y = "Hello"
{
    const Y = "bye"
    console.log(Y) //スコープの内と外で変数の定義を分ける
}
{
    const Y = "nice"
    console.log(Y)
}
console.log(Y)

const Z = "Hello1" //スコープチェーン
{
    const Z = "Hello2"
    {
        const Z = "Hello3"
        console.log(Z)
    }
    console.log(Z)
}
console.log(Z)

const W = "a"
console.log(1, W)
{
    const W = "b"
    console.log(2, W)
    {
        const W = "c"
        console.log(3, W)
    }
    console.log(4, W)
}
console.log(5, W)
