function solution(left, right) {
        let num = 0;
        for (let j = left; right >= j; j++) {
          const arr = [];
          for (let i = 0; j >= i; i++) {
            if (j % i === 0) {
              arr.push(i);
            }
          }
          if (arr.length % 2 === 0) {
            num += j;
          } else {
            num -= j;
          }
        }
        return num;
      }