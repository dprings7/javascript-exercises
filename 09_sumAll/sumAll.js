const sumAll = function(a, b) {
    sum = 0;

    if ((a < 0 || b < 0) || (!Number.isInteger(a) || !Number.isInteger(b))) {
        return 'ERROR';
    }

    //always start from smallest number
    if (a > b) {
        let c = b;
        b = a;
        a = c;
    }

    for (let i = a; i <= b; i++) {sum += i;}

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
