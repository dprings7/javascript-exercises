const removeFromArray = function(arr) {
    const args = Array.prototype.slice.call(arguments, 1);
    for (arg of args) {
        while (arr.includes(arg)) {
            index = arr.indexOf(arg)
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
