
      function solution(n) {
        let = arr = [];
        
        for (let i = 0; n >= i; i++) {
          if (n % i === 1) {
            arr.push(i);
          }
        }
        return arr[0];
      }