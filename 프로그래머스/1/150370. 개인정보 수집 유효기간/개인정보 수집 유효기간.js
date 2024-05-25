function solution(today, terms, privacies) {
    const parseDate = (dateString) => {
        let [year, month, day] = dateString.split(".").map(Number);
        return [year, month, day];
    };

    const getTermDuration = (terms, termType) => {
        let term = terms.find((element) => element.startsWith(termType));
        return parseInt(term.split(" ")[1], 10);
    };

    const calculateExpiryDate = (startDate, durationInMonths) => {
        let [year, month, day] = parseDate(startDate);
        month += durationInMonths;
        year += Math.floor(month / 12);
        month = month % 12;
        if (month === 0) {
            month = 12;
            year -= 1;
        }
        if (day === 1) {
            day = 28;
            month -= 1;
            if (month === 0) {
                month = 12;
                year -= 1;
            }
        } else {
            day -= 1;
        }

        return [year, month, day];
    };

    const getExpiredPrivacies = (today, privacies, terms) => {
        let todayDate = parseDate(today);
        let expiredIndexes = [];

        privacies.forEach((privacy, index) => {
            let [startDate, termType] = privacy.split(" ");
            let durationInMonths = getTermDuration(terms, termType);
            let expiryDate = calculateExpiryDate(startDate, durationInMonths);

            if (
                expiryDate[0] < todayDate[0] ||
                (expiryDate[0] === todayDate[0] && expiryDate[1] < todayDate[1]) ||
                (expiryDate[0] === todayDate[0] && expiryDate[1] === todayDate[1] && expiryDate[2] < todayDate[2])
            ) {
                expiredIndexes.push(index + 1);
            }
        });

        return expiredIndexes;
    };

    return getExpiredPrivacies(today, privacies, terms);
}