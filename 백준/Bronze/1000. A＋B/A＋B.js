const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input.reduce((acc,cur)=> acc+Number(cur),0))