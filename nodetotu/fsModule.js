const fs=require("fs")
const firstfs=fs.readFileSync('./test.txt','utf8')

data=fs.readFileSync('./app.js')
console.log(data.toString())

const vm = require('vm');

const code = fs.readFileSync('app.js', 'utf8');

vm.runInThisContext(code); 
fs.writeFileSync("one.txt",`this is the content exist in the first file sytem text ${firstfs}`)
fs.writeFileSync("./fstest/tow.txt",`this is the content exist in the first file sytem text ${firstfs}`)
 // runs the code in a sandboxed environment

fs.writeFileSync()
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

