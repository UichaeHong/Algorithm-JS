function solution(board, moves) {
        let arr = [];
        let nums = 0;
        let movArr = moves;

        moves.forEach(function (num) {
          // console.log(num);
          for (let i = 0; board.length > i; i++) {
            if (board[i][num - 1] !== 0) {
              // console.log(board[i][num - 1]);
              arr.push(board[i][num - 1]);
              board[i][num - 1] = 0;
              break;
            }
          }
          for (let j = 0; arr.length > j; j++) {
            if (arr[j] === arr[j + 1]) {
              arr.splice(j, j + 1);
              nums = nums + 1;
            }
          }
        });
        return nums * 2
      }