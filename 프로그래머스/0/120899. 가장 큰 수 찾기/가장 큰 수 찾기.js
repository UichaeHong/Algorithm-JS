function solution(array) {
  const max = array.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, array[0]);
    let posi = array.indexOf(max)
    return [max, posi]
}