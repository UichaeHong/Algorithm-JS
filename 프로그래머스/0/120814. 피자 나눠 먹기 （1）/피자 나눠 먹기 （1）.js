function solution(n) {
    if(n > 7) {
        let answer = Math.ceil(n/7)
        return answer
    } else {
        return 1
    }
}