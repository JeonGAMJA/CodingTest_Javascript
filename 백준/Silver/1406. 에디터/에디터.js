const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const editorString = input.slice(2)
let leftString = input[0].split("")
let rightString = []

editorString.forEach( command => {
    const [cmd, char] = command.split(" ");
    
    if(cmd === "L" && 0 < leftString.length > 0) rightString.push(leftString.pop())
    if(cmd === "D" && rightString.length > 0) leftString.push(rightString.pop())
    if(cmd === "B" && leftString.length > 0) leftString.pop()
    if(cmd === "P") leftString.push(char)
})

console.log(leftString.join('')+rightString.reverse().join(''))