function solution(a, b, c, d) {
    const results = [a, b, c, d];
    const count = {};

    results.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    const keys = Object.keys(count).map(key => parseInt(key));
    const values = Object.values(count);

    if (values.length === 1) {
        return 1111 * a;
    }
    if (values.includes(3)) {
        const p = keys.find(key => count[key] === 3);
        const q = keys.find(key => count[key] === 1);
        return Math.pow(10 * p + q, 2);
    }
    if (values.length === 2 && values.every(value => value === 2)) {
        const [p, q] = keys;
        return (p + q) * Math.abs(p - q);
    }
    if (values.includes(2) && values.length === 3) {
        const p = keys.find(key => count[key] === 2);
        const others = keys.filter(key => count[key] === 1);
        if (others.length === 2) {
            const [q, r] = others;
            return q * r;
        }
    }
    if (values.length === 4) {
        return Math.min(...results);
    }
}
