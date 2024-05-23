function solution(n, numlist) {
    let answer = []
    for(let i=0; numlist.length > i ; i++) {
      if(numlist[i] % n === 0) {
        answer.push(numlist[i])
      }
    }
return answer
}