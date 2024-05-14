function solution(my_string, n) {
  let splitMy_string = my_string.split('')
  let toArray = []
  for(let i=0; splitMy_string.length > i ; i++) {
    for(let j=0;n>j;j++) {
    toArray.push(splitMy_string[i])
    

    }
  }
    return toArray.toString().replaceAll(',','')
}