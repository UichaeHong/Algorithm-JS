// 여기서 대괄호 안에 들어있는 것은 배열, 지금 키보드를 바꿔서 적응이 안됨 주의
// 문제에 대해서 설명하고 시작하겠습니다. 먼저 이것은 배열인데 안에 있는 숫자들을 하나씩 꺼내서 x2를 해줘야 해요 
// 때문에 for라는 반복문으로 문제를 해결해보도록 하겠습니다. 곱한 값을 새로운 배열에 넣어줄게용

function solution(numbers) {
    var answer = [];
    for(let i=0; numbers.length > i ; i++ ) {
        let newArr = numbers[i] * 2
        answer.push(newArr)
    }
    return answer;
}