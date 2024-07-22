const [n,k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const factor = Array.from({length:n},(_,index)=> index+1).filter((ele)=> n%ele===0)
console.log(factor.length>=k ? factor[k-1]:0)