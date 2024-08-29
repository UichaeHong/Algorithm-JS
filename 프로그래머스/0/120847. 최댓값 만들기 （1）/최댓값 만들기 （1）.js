function solution(numbers) {
        const answer = numbers.sort((a, b) => a - b);
        return answer[answer.length - 1] * answer[answer.length - 2];
      }