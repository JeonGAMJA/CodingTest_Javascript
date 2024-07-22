const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<Number(n); i++){
    const [num,sum] = arr[i].split(' ').map(Number)
    
    console.log(num+sum)
}