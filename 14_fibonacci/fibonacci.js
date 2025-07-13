const fibonacci = function(val) {
    // Convert value if string
    val = +val;
    // Handle edge cases
    if (val < 0) return "OOPS";
    if (val <= 1) return val;

    let prev = 0;
    let curr = 1;
    while (val > 1) {
        let temp = curr
        curr = prev + curr
        prev = temp;
        val--;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
