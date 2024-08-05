function solution(participant, completion) {
    let participantMap = new Map();

    for (let name of participant) {
        if (participantMap.has(name)) {
            participantMap.set(name, participantMap.get(name) + 1);
        } else {
            participantMap.set(name, 1);
        }
    }

    for (let name of completion) {
        if (participantMap.has(name)) {
            let count = participantMap.get(name);
            if (count === 1) {
                participantMap.delete(name);
            } else {
                participantMap.set(name, count - 1);
            }
        }
    }

    for (let [name, count] of participantMap) {
        if (count > 0) {
            console.log(name);
            return name;
        }
    }
}