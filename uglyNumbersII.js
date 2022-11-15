var nthUglyNumber = function(n) {
    const dp = new Array(n).fill(0);
    dp[1] = 1;
    let p2 = 1;
    let p3 = 1;
    let p5 = 1;

    for (let i = 2; i <= n; i += 1) {
        const n2 = dp[p2] * 2;
        const n3 = dp[p3] * 3;
        const n5 = dp[p5] * 5;

        const minValue = Math.min(n2, n3, n5);
        dp[i] = minValue;

        if (minValue === n2) {
            p2 += 1;
        }
        if (minValue === n3) {
            p3 += 1;
        }
        if (minValue === n5) {
            p5 += 1;
        }
    }

    return dp[n];
};