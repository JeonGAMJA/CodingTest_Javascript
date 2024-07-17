function solution(strArr) {
    return strArr.map((ele,index)=> index%2===0 ? ele.toLowerCase():ele.toUpperCase())
}