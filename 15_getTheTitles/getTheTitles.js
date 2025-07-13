const getTheTitles = function(arr) {
    let titles = []
    
    for (const element of arr) {
        titles.push(Object.values(element)[0]);
    }
    
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
