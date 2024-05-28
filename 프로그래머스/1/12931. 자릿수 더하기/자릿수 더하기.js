function solution(n) {
        var answer = [];
        let num = 0;
        let str = n.toString();
        let strArr = str.split("");
        for (let i = 0; strArr.length > i; i++) {
          answer.push(Number(strArr[i]));
        }
        for (let j = 0; answer.length > j; j++) {
          num = num + answer[j];
        }
        return num;
      }