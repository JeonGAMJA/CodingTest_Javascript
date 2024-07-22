const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((ele)=> ele.split(" ").map(Number));

input.forEach(([num,sum])=>{
    if(num!==sum) console.log(num>sum ?(num%sum===0? "multiple":"neither"):(sum%num===0?"factor":"neither"))
})