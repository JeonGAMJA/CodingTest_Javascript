function solution(n) {
 return Array.from({length:n},(_,index)=> index+1).reduce((cur,acc)=> 
     acc % 2 === 0 ? acc+cur : cur
 ,0)
}