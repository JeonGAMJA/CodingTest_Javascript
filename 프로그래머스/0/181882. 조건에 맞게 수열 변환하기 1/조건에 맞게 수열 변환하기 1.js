function solution(arr) {
    return arr.map((ele)=> ele>=50? (ele%2===0 ? ele/2 : ele):(ele%2!==0 ? ele*2:ele))
}