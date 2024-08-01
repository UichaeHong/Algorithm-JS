 function solution(num) {
        let n = num;
        let s = 0;
        while (n !== 1) {
          if (n !== 1) {
            if (n % 2 === 0) {
              n = n / 2;
              s++;
            } else if (n % 2 === 1) {
              n = n * 3 + 1;
              s++;
            }
          }
        }
        if (s >= 500) {
          return -1;
        } else {
          return s;
        }
      }