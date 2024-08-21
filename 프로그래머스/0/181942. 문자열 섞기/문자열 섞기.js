function solution(str1, str2) {
        const arr = [];
        for (let i = 0; str1.length > i; i++) {
          arr.push(str1.slice(i, i + 1));
          arr.push(str2.slice(i, i + 1));
        }
        return arr.join().replaceAll(",", "");
      }