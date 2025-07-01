const repeatString = function(str, repeat) {

    if (repeat < 0) {
        return 'ERROR';
    }
    concatenatedStr = ''
    for (i = 0; i < repeat; i++) {
        concatenatedStr += str;
    }

    return concatenatedStr;
};

// Do not edit below this line
module.exports = repeatString;
