const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = input.sort().reduce((acc,cur,index)=> {
        if(input[index+1]===cur) acc.push(cur)
        return acc;
    },[])
    
const getScore = (length) => {
        if(length===0) return Math.max(...input) * 100
        if(length===1) return arr[0]*100+1000
        if(length===2) return arr[0]*1000+10000
    }
    
console.log(getScore(arr.length))