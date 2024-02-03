
// //same thing
// const fs = require('fs')
// fs.readFileSync

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


//create a new file
//the flag part is to append to a file and not override it


writeFileSync(
    './content/result-sync.txt', 
    `Here os the result ${first}, ${first}`,
    {flag: 'a'} 
    )
console.log('Done with this task')
console.log('starting the next task')
