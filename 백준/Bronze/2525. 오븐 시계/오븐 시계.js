const [time,n] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [h,m] = time.trim().split(' ').map(Number);

const totalMinutes = m+Number(n);
const additionalHours = Math.floor(totalMinutes/60);
const newMinutes = totalMinutes % 60;
const newHours = (h + additionalHours) % 24
    
console.log(newHours + " " + newMinutes)
