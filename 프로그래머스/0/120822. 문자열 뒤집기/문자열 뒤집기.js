function solution(my_string) {
    var answer = my_string.split('').reverse();
    let test = answer.join()

    return test.replaceAll(',','')
}
