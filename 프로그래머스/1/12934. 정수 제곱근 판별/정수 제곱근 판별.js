function solution(n) {
    
    var answer = 0;
    if(Number.isInteger(Math.sqrt(n))) {
        let s = Math.sqrt(n) + 1
        return answer = s * s
    } else {
        return answer = -1
    }
}