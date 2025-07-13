const palindromes = function (str) {
    let palindrome = true;
    // Normalise
    str = str.toLowerCase();
    // Remove any non letters
    let arr = Array.from(str);
    filtered = arr.filter((char) => isAlphaNumeric(char))
    
    // go through array and check if start char = end char
    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i] !== (filtered[(filtered.length-1 )- i])) {
            palindrome = false
            break;
        }
    }
    return palindrome
};

function isAlphaNumeric(char) {
    return /^[a-z0-9]+$/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
