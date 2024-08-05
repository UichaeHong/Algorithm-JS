function solution(N, stages) {
        let arr = [];
        let numArr = [];
        for (let i = 1; N >= i; i++) {
          let a = 0;
          let b = 0;
          let num = {
            number: i,
            total: 0,
          };
          for (let j = 0; stages.length > j; j++) {
            if (stages[j] >= i) {
              a += 1;
            }
          }
          for (let t = 0; stages.length > t; t++) {
            if (stages[t] === i) {
              b += 1;
            }
          }
          num.total = b / a;
          arr.push(num);
        }
        arr.sort((a, b) => b.total - a.total);

        arr.forEach((n) => numArr.push(n.number));
        return numArr;
      }