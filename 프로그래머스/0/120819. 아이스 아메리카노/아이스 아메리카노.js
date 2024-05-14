function solution(money) {
    if(money >= 5500) {
      let test = Math.floor(money / 5500)
      let test2 = money - (5500 * test)
      return [test, test2]
    } else {
      return [0,money]
    }
}