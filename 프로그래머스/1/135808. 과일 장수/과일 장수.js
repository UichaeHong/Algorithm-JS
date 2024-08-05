function solution(k, m, score) {
        let numberFloor = Math.floor(score.length / m);
        let descending = score.sort((a, b) => b - a).slice(0, numberFloor * m);
        let number = 0;

        for (let i = m - 1; descending.length >= i; i += m) {
          let n = descending[i] * m;
          number += n;
        }
        return number;
      }