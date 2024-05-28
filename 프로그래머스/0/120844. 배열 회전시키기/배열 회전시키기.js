function solution(numbers, direction) {
        let answer = [];
        let first = numbers[0];
        if (direction === "left") {
          for (let i = 0; numbers.length > i; i++) {
            answer.push(numbers[i]);
          }
          answer.shift();
          answer.push(first);
          return answer;
        } else {
          for (let i = 0; numbers.length > i; i++) {
            answer.push(numbers[i]);
          }
          answer.pop();
          answer.unshift(numbers[numbers.length - 1]);
          return answer;
        }
      }