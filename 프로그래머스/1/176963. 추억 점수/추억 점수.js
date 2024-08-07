function solution(name, yearning, photo) {
        let arr = []; // 객체 ex) { name: "may", number: 5 }
        let answer = []; // 최종 결과값

        for (let i = 0; name.length > i; i++) {
          let obj = {
            name: name[i],
            number: yearning[i],
          };
          arr.push(obj);
        }

        for (let j = 0; photo.length > j; j++) {
          let num = 0;
          for (let p = 0; photo[j].length > p; p++) {
            let search = name.indexOf(photo[j][p]);
            if (search !== -1) {
              num += arr[search].number;
            }
          }
          answer.push(num);
        }
        return answer;
      }