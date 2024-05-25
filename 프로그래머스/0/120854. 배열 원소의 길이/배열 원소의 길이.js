function solution(strlist) {
let answer = [];
  for (const char of strlist) {
    answer.push(char.split('').length);
}
return answer
}