const fs=require("fs")
const firstfs=fs.readFileSync('./test.txt','utf8')
fs.writeFileSync("./fstest/tow.txt",`this is the content exist in the first file sytem text ${firstfs}`)
