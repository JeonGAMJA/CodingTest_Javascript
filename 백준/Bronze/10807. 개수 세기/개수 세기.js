const [n,numbers,v] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(numbers.toString().trim().split(' ').map(Number).filter((ele)=> ele===Number(v)).length)
