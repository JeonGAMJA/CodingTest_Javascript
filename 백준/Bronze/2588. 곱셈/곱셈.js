const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((ele)=> Number(ele));

const [a,b] = input;
const arr = b.toString().split('').reverse().map((ele)=> a * Number(ele));
const result = [arr.reduce((acc,cur,index )=> acc+(cur*(10**index)),0)];
  
arr.concat(result).forEach((ele)=> console.log(ele));