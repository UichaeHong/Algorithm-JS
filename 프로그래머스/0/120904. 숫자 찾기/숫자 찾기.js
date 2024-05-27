function solution(num, k) {
    let answer = num.toString().indexOf(k)

    if(Number(answer+1) > 0) {
      return(Number(answer+1))
    } else {
      return -1
    }
}