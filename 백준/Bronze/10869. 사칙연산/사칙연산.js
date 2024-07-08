const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [a,b] = input.map((num)=> Number(num));

function calculate(op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      return '0';
  }
}

['+','-','*','/','%'].forEach((op)=> console.log(Math.floor(calculate(op))));