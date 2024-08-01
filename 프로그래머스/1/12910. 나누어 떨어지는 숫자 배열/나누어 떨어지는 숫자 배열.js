function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach((n) => {
        if(n % divisor === 0) {
            answer.push(n)
        } 
    })
    
    if(answer?.length === 0) {
        answer.push(-1)
    }
    answer.sort(function(a, b) {
  return a - b;
})
    return answer
}