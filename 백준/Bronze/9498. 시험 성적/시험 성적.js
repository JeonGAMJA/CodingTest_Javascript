const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log(input>89? "A" : input>79? "B" : input>69? "C" : input>59? "D":"F")