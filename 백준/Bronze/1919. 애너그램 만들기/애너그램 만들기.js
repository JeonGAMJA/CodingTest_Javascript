const [string1, string2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const commonCount1 = string1.split("").reduce((acc,cur)=> acc.replace(cur,""),string2).length
const commonCount2 = string2.split("").reduce((acc,cur)=> acc.replace(cur,""),string1).length
    
console.log(commonCount1 + commonCount2)