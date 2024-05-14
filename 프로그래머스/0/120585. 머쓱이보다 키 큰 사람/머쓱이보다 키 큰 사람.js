function solution(array, height) {
    let person = 0
    for(let i=0;array.length > i;i++) {
        if(array[i] > height) {
            person+=1
        }
    }
    return person
}
