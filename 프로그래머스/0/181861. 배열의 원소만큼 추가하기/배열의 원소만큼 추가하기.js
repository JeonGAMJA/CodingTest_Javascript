function solution(arr) {
    return arr.map((ele)=> Array.from({length:ele}, (v,_)=> ele)).flat()
}