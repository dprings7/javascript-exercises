const findTheOldest = function(arr) {
    const date = new Date();
    let ages = arr.map((person) => {
        if ('yearOfDeath' in person) {
            person['age'] = person.yearOfDeath - person.yearOfBirth;
            }
        else {
            person['age'] = date.getFullYear() - person.yearOfBirth;
        }
        return person;
    })
    .sort((a, b) => b.age - a.age);

    return ages[0];

    let sorted = ages.sort((a, b) => b.age - a.age);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
