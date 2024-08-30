function solution(names) {
    var answer = [];
    for(let i = 0; names.length > i ; i++) {
        if(i % 5 === 0) {
            answer.push(names[i])
        }
    }
    return answer
}