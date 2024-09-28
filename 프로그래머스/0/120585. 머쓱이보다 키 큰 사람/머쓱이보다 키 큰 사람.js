function solution(array, 머쓱이) {
    // forEach는 어떠한 상황에서도 return값이 없죠 ?
    // 모든 return 값이 undefined가 됩니다
    // map은 첫번째로 배열을 도니까 돌면서 넘겨받은 배열의 인자를 받아와야하죠 ?
    // 값이 truthy한 애들만 반환을 해줍니다 그래서 조건을 달아줘야함
    // 고차함수 사용하는 이유 여러가지가 있겠지만 코드를 보다 더 읽기 용이하게 만들기 위해서
    return array.filter(다른사람 => 머쓱이 < 다른사람).length
}