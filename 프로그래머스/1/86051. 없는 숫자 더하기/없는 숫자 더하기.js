function solution(numbers) {
    let arr = []
    let number = 0
   for(let i = 0; 10 > i;i++) {
       if(numbers.indexOf(i) === -1) {
          arr.push(i) 
       }
   }
    arr.forEach((n)=> {
        number+=n
    })
    return number
}