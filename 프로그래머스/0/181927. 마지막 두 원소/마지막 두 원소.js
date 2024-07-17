function solution(num_list) {
    const reversedArr = [...num_list].reverse()
    num_list.push(reversedArr[0] > reversedArr[1] ? reversedArr[0]-reversedArr[1]: reversedArr[0]*2)
   return num_list
}