function solution(n, k) {
    return Array.from({length: n},(_,i)=> i+1).filter((ele)=> ele%k===0)
}