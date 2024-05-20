function solution(my_string) {
  let my_stringArr = my_string.split('')
  let my_stringArr2 = []
    for(let i=0; my_stringArr.length > i; i++) {
      if(my_stringArr[i] === my_string[i].toUpperCase()) {
        my_stringArr2.push(my_stringArr[i].toLowerCase())
      } else if(my_stringArr[i] !== my_string[i].toUpperCase()) {
        my_stringArr2.push(my_stringArr[i].toUpperCase())
      }
    }
      return my_stringArr2.join().replaceAll(',','')
}
