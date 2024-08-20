function solution(array, commands) {
        const arr = [];
        commands.forEach((a) => {
          let spl;
          for (let i = 0; a.length > i; i++) {
            spl = array.slice(a[0] - 1, a[1]);
          }
          let num = a[a.length - 1] - 1;
          arr.push(spl.sort((a,b) => a-b)[num]);
        });
        return arr;
      }