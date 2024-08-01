function solution(s) {
        let answer = [];
        let lastSeen = {};

        for (let i = 0; i < s.length; i++) {
          let char = s[i];
          if (lastSeen[char] !== undefined) {
            answer.push(i - lastSeen[char]);
          } else {
            answer.push(-1);
          }
          lastSeen[char] = i;
        }

        return answer
}