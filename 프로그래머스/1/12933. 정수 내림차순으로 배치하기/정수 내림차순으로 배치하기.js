// 1. 매개변수 n을 문자열로 변환
// 2. 문자열로 변환한 배열 n의 길이를 받습니다.


function solution(n) {
    var answer = 0;
    let arr = []
    let str = n.toString().split('')
    for(let i=0; str.length > i;i++) {
      arr.push(Number(str[i]))
    arr.sort((a, b) => b - a)
    }
    answer = arr.join().replaceAll(',','')
    return Number(answer);
}