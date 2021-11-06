setTimeout (
    () => { console.log("hello") }, //5秒待って"hello"
    5000
)

setInterval(
    () => { console.log("bye") },  //1秒ごとに"bye"
    1000
)

// 関数(関数, 秒数)　=コールバック関数