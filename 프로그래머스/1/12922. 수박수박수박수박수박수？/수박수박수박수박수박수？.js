function solution(n) {
    const arr = []
    for(let i = 0; n > i ;i++) {
        if(i % 2 === 1) {
            arr.push('박')
        } else if(i % 2 === 0) {
            arr.push('수')
        }
    }
    return arr.join().replaceAll(',','')
}