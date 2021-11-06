//setInterval,setTimeoutのキャンセル

let count = 0
const timerId = setInterval(
    () => {
        count = count + 1
        console.log("Hello" + count)
        if(count > 15){
            clearInterval(timerId)
        }
    },
    500
)
