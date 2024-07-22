const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const factor = numbers.map((ele)=> Array.from({length:ele},(_,index)=> index).filter((num)=> ele%num===0))
const sum = factor.map((ele)=>ele.reduce((acc,cur)=> acc+cur,0))

return numbers.forEach((ele,index)=> ele===sum[index] ? console.log(ele+" = "+factor[index].join(" + ")):sum[index]>0 && console.log(ele+" is NOT perfect."))