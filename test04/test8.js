//非同期実行
setTimeout(
    () => {console.log("Hello")}, 
    3000
)
setTimeout(
    () => {console.log("bye")},  //setTimeoutを同タイミングで行う
    1000
)

setTimeout(
    () => {
        console.log("Hello")
        setTimeout(
            () => {console.log("gg")}, 
            2000
        )
    
    }, 
    3000
) //3秒待って"Hello"、2秒待って"gg"