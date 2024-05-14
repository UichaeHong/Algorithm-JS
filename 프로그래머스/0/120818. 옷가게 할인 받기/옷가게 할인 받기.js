function solution(price) {
  if(price >= 500000) {
    let test1 = price* 0.2
    return Math.floor(price-test1)
  } else if(price >= 300000) {
    let test2 = price* 0.1
    return Math.floor(price-test2)
  } else if(price >= 100000) {
    let test3 = price* 0.05
    return Math.floor(price-test3)
  } else {
    return price
  }
}
