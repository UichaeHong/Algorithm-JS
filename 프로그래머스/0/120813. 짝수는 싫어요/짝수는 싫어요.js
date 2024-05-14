function solution(n) {
    var answer = [];
  for(let i=0;n>= i;i++) {
    if(i % 2 !== 0) {
      answer.push(i)
    }
  }
    return answer;
}
