function solution(array, n) {
    let number = 0
    for(let i=0; array.length > i; i++) {
        if(array[i] === n) {
            number+=1
        }
    }
    return number
}