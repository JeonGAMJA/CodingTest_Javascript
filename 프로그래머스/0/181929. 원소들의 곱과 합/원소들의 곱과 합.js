function solution(num_list) {
return num_list.reduce((acc,cur)=>acc+cur,0) * num_list.reduce((acc,cur)=>acc+cur,0) > num_list.reduce((acc,cur)=>acc*cur,1) ? 1 : 0
}