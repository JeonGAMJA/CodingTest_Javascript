const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((ele)=> ele.split(' ').map(Number));
const [studentCount, roomCapacity] = input[0]
const studentsInfo = new Array(6).fill(0).map(()=> [0,0])
const students = input.slice(1).forEach(([gender,grade]) => studentsInfo[grade-1][gender]++)
const roomCount = studentsInfo.reduce((acc, [female, male]) => {
        return acc + Math.ceil(female / roomCapacity) + Math.ceil(male / roomCapacity);
    }, 0)

console.log(roomCount)
    