function solution(slice, n) {
    if(n >= slice) {
        return Math.ceil(n / slice)
    } else if(n === 0)  {
        return 0
    }
    else {
        return 1
    }
}