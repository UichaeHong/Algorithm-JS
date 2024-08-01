function solution(absolutes, signs) {
    let arr = []
    let num = 0
    for(let i = 0; absolutes.length > i ; i++) {
        if(signs[i] === false) {
            arr.push(absolutes[i]*-1)
        } else {
            arr.push(absolutes[i])
        }
    }
    arr.forEach((n)=> {
        num+=n
    })
    return num
}