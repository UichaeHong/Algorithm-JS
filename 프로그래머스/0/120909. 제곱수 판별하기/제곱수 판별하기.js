function solution(n) {
    let answer = Math.sqrt(n)
    if(Number.isInteger(answer) === true) {
      return 1
    } else {
      return 2
    }
}