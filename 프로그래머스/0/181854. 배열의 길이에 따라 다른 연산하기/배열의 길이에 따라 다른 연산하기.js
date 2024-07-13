function solution(arr, n) {
    if(arr.length%2===0) return arr.map((ele,index)=> index%2 !== 0 ?ele+n : ele)
    return arr.map((ele,index)=> index%2 === 0 ? ele+n : ele)
}