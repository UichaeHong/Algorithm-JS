function solution(todo_list, finished) {
    const arr = []
    for(let i = 0; todo_list.length > i ; i++) {
        if(finished[i] === false) {
            arr.push(todo_list[i])
        }
    }
    return arr
}