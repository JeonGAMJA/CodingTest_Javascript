const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

const number = Number(n);
const numbers = arr.map(Number);

const factors = numbers.map((ele)=> Array.from({length: ele}, (_,index)=> index+1).filter((num)=> ele%num ===0))

console.log(factors.filter((ele)=> ele.length === 2).length)