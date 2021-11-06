//setInterval,setTimeoutのキャンセル

const timerId = setTimeout( () => {console.log("hello!!")}, 700)
clearTimeout(timerId)