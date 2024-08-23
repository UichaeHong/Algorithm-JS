function solution(price, money, count) {
        let num = 0;
        for (let i = price; count * price >= i; i += price) {
          num += i;
        }

        if (money - num < 0) {
          return (money - num) * -1;
        } else {
          return 0;
        }
      }