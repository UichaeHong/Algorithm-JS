function solution(survey, choices) {
        let arr = [];
        let lastArr = [];
        let numberArr = [];
        let textArr = [];

        for (let i = 0; survey.length > i; i++) {
          let obj = {
            value: survey[i],
            number: choices[i],
          };

          arr.push(obj);
        }

        arr.forEach((testArr) => {
          let dd = testArr.value.split("");
          switch (testArr.number) {
            case 1:
              lastArr.push({ value2: dd[0], number2: 3 });
              break;
            case 2:
              lastArr.push({ value2: dd[0], number2: 2 });
              break;
            case 3:
              lastArr.push({ value2: dd[0], number2: 1 });
              break;
            case 4:
              lastArr.push({ value2: dd[0], number2: 0 });
              break;
            case 5:
              lastArr.push({ value2: dd[1], number2: 1 });
              break;
            case 6:
              lastArr.push({ value2: dd[1], number2: 2 });
              break;
            case 7:
              lastArr.push({ value2: dd[1], number2: 3 });
              break;
          }

          let objArr = ["R", "T", "C", "F", "J", "M", "A", "N"];
          for (let i = 0; objArr.length > i; i++) {
            if (testArr.value !== objArr[i]) {
              lastArr.push({ value2: objArr[i], number2: 0 });
            }
          }
        });
        const map = new Map();

        lastArr.forEach((item) => {
          if (map.has(item.value2)) {
            map.get(item.value2).number2 += item.number2;
          } else {
            map.set(item.value2, { ...item });
          }
        });

        const uniqueArr = Array.from(map.values());

        let sortOrder = ["R", "T", "C", "F", "J", "M", "A", "N"];
        uniqueArr.sort((a, b) => {
          return sortOrder.indexOf(a.value2) - sortOrder.indexOf(b.value2);
        });

        for (let t = 0; uniqueArr.length - 2 >= t; t += 2) {
          if (uniqueArr[t].number2 > uniqueArr[t + 1].number2) {
            numberArr.push(t + 1);
          } else if (uniqueArr[t].number2 < uniqueArr[t + 1].number2) {
            numberArr.push(t);
          } else {
            numberArr.push(t + 1);
          }
        }
        for (let s = 0; numberArr.length > s; s++) {
          numberArr.sort().reverse();
          uniqueArr.splice(numberArr[s], 1);
        }

        uniqueArr.forEach((tt) => {
          textArr.push(tt.value2);
        });
        return textArr.join().replaceAll(",", "");
      }