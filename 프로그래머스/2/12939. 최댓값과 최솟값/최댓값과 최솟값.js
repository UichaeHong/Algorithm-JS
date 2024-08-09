function solution(s) {
    let arr = s.split(" ").map(Number);
    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);
    return minNum + " " + maxNum
}