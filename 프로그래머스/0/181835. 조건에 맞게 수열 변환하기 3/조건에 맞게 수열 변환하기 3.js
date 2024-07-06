function solution(arr, k) {
    return arr.map((ele)=> {
        if(k%2 !== 0) return ele*k
        if(k%2 === 0) return ele+k
    })
}