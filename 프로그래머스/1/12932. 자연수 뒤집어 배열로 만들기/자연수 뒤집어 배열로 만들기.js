function solution(n) {
    var answer = [];
    let str = n.toString()
    for(let i = 0; str.length > i ; i++) {
        answer.push(Number(str[i]))
    }
    return answer.reverse()
}