function solution(id_list, report, k) {
    const answer = id_list.map(user => ({ name: user, reporters: [], mailCount: 0 }));
    const reports = Array.from(new Set(report));

    reports.forEach(entry => {
        const [reporter, reported] = entry.split(" ");
        const user = answer.find(user => user.name === reported);
        if (user) {
            user.reporters.push(reporter);
        }
    });

    answer.forEach(user => {
        if (user.reporters.length >= k) {
            user.reporters.forEach(reporter => {
                const reporterUser = answer.find(u => u.name === reporter);
                if (reporterUser) {
                    reporterUser.mailCount += 1;
                }
            });
        }
    });

    return answer.map(user => user.mailCount);
}