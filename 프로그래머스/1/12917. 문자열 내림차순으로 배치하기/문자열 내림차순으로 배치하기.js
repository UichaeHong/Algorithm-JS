function solution(s) {
        var answer = s.split("").sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
        return answer.join().replaceAll(",", "");
      }