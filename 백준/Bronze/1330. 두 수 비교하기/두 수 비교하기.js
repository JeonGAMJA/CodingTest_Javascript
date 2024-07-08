const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((ele)=> Number(ele));
const [a,b] = input;

if(a>b) console.log(">");
if(a<b) console.log("<");
if(a === b) console.log("==");