function solution(s) {
        const answer = [];
        let arr = s.split(" ");
        for (let i = 0; arr.length > i; i++) {
          let t = arr[i].split("");
          const a = [];
          for (let j = 0; t.length > j; j++) {
            if (j % 2 === 0 || j === 0) {
              a.push(t[j].toUpperCase());
            } else {
              a.push(t[j].toLowerCase());
            }
          }
          a.join().replaceAll(",", "");
          answer.push(a.join().replaceAll(",", ""));
          a.shift();
        }
        return answer.join().replaceAll(",", " ");
      }