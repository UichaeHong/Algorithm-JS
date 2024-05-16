function solution(cipher, code) {
  let answer = []
    let splt = cipher.split('')
    for(let i=code ;splt.length >= i; i++) {
      if(i % code === 0) {
        answer.push(splt[i-1])
      }
    }
    return answer.join().replaceAll(',','')
}