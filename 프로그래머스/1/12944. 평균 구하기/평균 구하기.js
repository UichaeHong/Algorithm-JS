function solution(arr) {
        let num = 0;
        arr.forEach((n) => {
          num = num + Number(n);
        });
        return num /arr.length ;
      }