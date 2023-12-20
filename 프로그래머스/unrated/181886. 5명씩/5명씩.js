function solution(names) {
  const Arrays = [];
  let test = [];
  for (let i = 0; i < names.length; i += 5) {
    Arrays.push(names.slice(i, i + 5));
  }
  for (let j = 0; Arrays.length > j; j++) {
    test.push(Arrays[j][0])
  }
  return test
}
