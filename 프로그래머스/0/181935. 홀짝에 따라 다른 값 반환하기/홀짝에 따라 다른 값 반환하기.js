function solution(n) {
        let num = 0;
        if (n % 2 === 0) {
          for (let i = 0; n >= i; i++) {
            if (i % 2 === 0) {
              num += i * i;
            }
          }
        } else {
          for (let i = 0; n >= i; i++) {
            if (i % 2 === 1) {
              num += i;
            }
          }
        }
        return num;
      }