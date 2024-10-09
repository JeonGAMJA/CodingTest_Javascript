function solution(s){
    let acc = 0;
    for (let cur of s) {
        if(cur === "(") acc++
        if(cur === ")") acc--
        if(acc < 0) return false
    }
    return acc === 0
}