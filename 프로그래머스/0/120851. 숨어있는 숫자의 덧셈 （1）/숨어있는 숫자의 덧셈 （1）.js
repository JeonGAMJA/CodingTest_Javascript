function solution(my_string) {
    return my_string.replaceAll(/[a-zA-Z]/g,"").split('').map(Number).reduce((cur,acc)=> cur+acc,0)
}