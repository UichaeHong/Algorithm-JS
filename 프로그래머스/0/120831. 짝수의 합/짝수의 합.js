function solution(n) {
    let j = 0
    for(let i=1; n >= i ; i++) {
     if(i % 2 === 0) {
        j=j+i
    }
  }
    return j
}