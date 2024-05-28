function solution(n, k) {
        let answer = [];
        let i = 1;
        if (n >= 1) {
          while (n >= i) {
            if (i % k === 0) {
              answer.push(i);
            }
            i += 1;
          }
          return answer;
        }
      }