const [m,n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const numbers = Array.from({length: (n-m)+1}, (_,index)=> index+m)
const factors = numbers.filter((ele)=> Array.from({length: ele}, (_,index)=> index+1).filter((num)=> ele % num === 0).length === 2)

if(factors.length > 0){
   console.log(factors.reduce((acc,cur)=> acc+cur,0))
   console.log(factors[0])
}

if(factors.length === 0){
   console.log(-1)
}

