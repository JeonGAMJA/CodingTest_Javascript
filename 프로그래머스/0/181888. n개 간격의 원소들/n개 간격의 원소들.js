function solution(num_list, n) {
    return num_list.filter((ele,index)=> index%n === 0)
}