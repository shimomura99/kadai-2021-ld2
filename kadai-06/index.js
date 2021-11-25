const fs = require("fs")
const data = fs.readFileSync("./kadai-06/data.json").toString("utf-8")

try {
    const obj = JSON.parse(data)
    obj.updateAt = Date()
    obj.count = obj.count + 1
    fs.writeFileSync("./kadai-06/data.json", JSON.stringify(obj))
    process.exit(0)
} catch (error) {
    console.log("不正な JSON フォーマットです")
    process.exit(1)
}






