function solution(s){
    let sArr = s.split('')
    let P = 0
    let Y = 0
    for(let i=0; sArr.length > i ; i++) {
      if(/^[A-Z]$/.test(sArr[i])) {
        if(sArr[i]==='P') {
          P+=1
        } else if(sArr[i] === "Y"){
          Y+=1
        }
      } else if(/^[a-z]$/.test(sArr[i])) {
          if(sArr[i]==='p') {
          P+=1
        } else if(sArr[i] === "y"){
          Y+=1
        }
      }
    }
    return P === Y ? true : false
}