function solution(n) {
    let arr = []
    let answer = 0
    let num = n.toString().split('')
    for(let i=0; num.length > i ; i++) {
      arr.push(Number(num[i]))
    }
    for(let j=0; arr.length > j; j++) {
      answer+=arr[j]
    }
      return answer
}