function solution(num_list) {
  let minus = []
    for(let i=0; num_list.length>i;i++) {
      if(num_list[i] < 0) {
        minus.push(num_list[i])
      }
    }
        return num_list.indexOf(minus[0])
}
