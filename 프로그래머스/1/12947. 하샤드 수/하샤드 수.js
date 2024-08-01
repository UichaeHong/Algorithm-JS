function solution(x) {
    let s = x.toString().split('')
    
    let num = 0
    
    s.forEach((n) => {
        num = num + Number(n)
    })
    
    return x % num === 0
    
}