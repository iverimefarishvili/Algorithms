var isHappy = function (n) {
    let st = new Set();
    while (n != 1) {
        if (st.has(n)) {
            return false
        }
        else {
            st.add(n);
            n = next(n);
        }
    }
    return true


};

var next = function (x) {
    let temp = 0;
    let n = 0;
    while (x > 0) {
        temp = parseInt(x % 10);
        n += temp * temp
        x = parseInt(x / 10);
    }
    return n
}