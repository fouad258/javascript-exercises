const findTheOldest = function(people) {
    let oldest = {yearOfDeath:0};
    people.forEach(person => {
        if(!oldest.yearOfDeath){
            oldest = person
        } else if(oldest.yearOfDeath - oldest.yearOfBirth < person.yearOfDeath - person.yearOfBirth){
            if(!person.yearOfDeath){
                oldest = person
            }else {
                oldest = person;
            }
        }
    });
    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]



// Do not edit below this line
module.exports = findTheOldest;


