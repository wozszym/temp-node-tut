const { readFileSync, writeFileSync } = require('fs')
// const fs = require('fs') fs.

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} ${second}`,
    { flag: 'a' }
)

