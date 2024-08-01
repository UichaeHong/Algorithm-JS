function solution(n, arr1, arr2) {
        var answer = {
          binaryNumber1: [],
          binaryNumber2: [],
        };
        let arr = [];
        arr.push(arr1, arr2);

        let lastArr = [];

        for (let i = 0; arr1.length > i; i++) {
          let arrNumber = arr1[i].toString(2).split("");
          if (arrNumber.length < n) {
            for (let an = 0; n - arrNumber.length; an++) {
              arrNumber.unshift("0");
            }
            answer.binaryNumber1.push(arrNumber);
          } else {
            answer.binaryNumber1.push(arrNumber);
          }
        }

        for (let i = 0; arr2.length > i; i++) {
          let arrNumber = arr2[i].toString(2).split("");
          if (arrNumber.length < n) {
            for (let an = 0; n - arrNumber.length; an++) {
              arrNumber.unshift("0");
            }
            answer.binaryNumber2.push(arrNumber);
          } else {
            answer.binaryNumber2.push(arrNumber);
          }
        }

        for (let s = 0; answer.binaryNumber1.length - 1 >= s; s++) {
          let testArr = [];

          for (
            let ts = 0;
            answer.binaryNumber1[s].length - 1 >= ts ||
            answer.binaryNumber2[s].length - 1 >= ts;
            ts++
          ) {
            if (
              answer.binaryNumber1[s][ts] === "1" ||
              answer.binaryNumber2[s][ts] === "1"
            ) {
              testArr.push("#");
            } else {
              testArr.push(" ");
            }
          }
          console.log(testArr);
          lastArr.push(testArr.join().replaceAll(",", ""));
        }

        return lastArr;
      }