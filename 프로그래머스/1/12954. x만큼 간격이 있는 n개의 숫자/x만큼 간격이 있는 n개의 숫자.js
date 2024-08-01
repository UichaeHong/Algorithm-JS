function solution(x, n) {
    var answer = [];
    let num = 0
    for(let i = 1; n >= i ; i++) {
        num = num + x
        answer.push(num)
    }
    return answer;
}