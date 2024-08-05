function solution(phone_number) {
        let phone = phone_number;
        let numLeng = phone_number.length;
        let secretNumber = "*";
        let test;
        if (numLeng > 4) {
          test = phone.slice(numLeng - 4, numLeng);
          for (let i = 0; numLeng - 5 > i; i++) {
            secretNumber += "*";
          }
        } else {
          return phone;
        }
        return secretNumber + test;
      }