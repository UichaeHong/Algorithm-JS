
function solution(my_string) {
  let answer = []
    for(let i=0; my_string.length > i ; i++) {
    const vowelRegex = /^[aeiouAEIOU]$/;
    if(vowelRegex.test(my_string[i]) !== true) {
      answer.push(my_string[i])
    }
    }
    return answer.join().replaceAll(',','')
}