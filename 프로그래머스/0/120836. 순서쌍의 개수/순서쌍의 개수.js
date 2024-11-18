function solution(n) {
        let number = 0;
        for (let i = 1; n >= i; i++) {
          if (Number.isInteger(n / i)) {
            number += 1;
          }
        }
        return number;
      }