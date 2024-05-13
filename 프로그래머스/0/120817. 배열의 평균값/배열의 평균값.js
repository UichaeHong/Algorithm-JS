function solution(numbers) {
    var t = 0;
    for(let i=0; numbers.length > i ; i++) {
        t=t+numbers[i]
    }
    return t / numbers.length
}
// solution()
