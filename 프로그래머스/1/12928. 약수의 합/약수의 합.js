function solution(n) {
        let i = 1;
        let number=0;
        while (n >= i) {
          if (n % i === 0) {
            number = i + number;
          }
          i += 1;
        }
            return number
      }