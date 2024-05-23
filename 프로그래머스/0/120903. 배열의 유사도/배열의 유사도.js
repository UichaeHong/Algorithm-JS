function solution(s1, s2) {
  let result = 0
    for(let i=0; s1.length > i ; i++) {
      for(let j=0; s2.length > j; j++) {
        if(s1[i] === s2[j])
        result+=1
      }
    }
    return result
}
