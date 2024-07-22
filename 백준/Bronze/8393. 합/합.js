const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log(Array.from({length:input},(_,index)=> index+1).reduce((acc,cur)=> acc+cur,0))