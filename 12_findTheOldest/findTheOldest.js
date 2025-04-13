const findTheOldest = function(people) {
 let oldestAge = 0;
 let oldest = people.reduce((oldPerson, person) => {
    //console.log('in function!');
    let deathYear;
    if(person.yearOfDeath === undefined) {
      //console.log('person\'s year of death is undefined');
      deathYear = new Date().getFullYear();
    }
    else {
      //console.log("person's year of death is defined");
      deathYear = person.yearOfDeath;
    }

    let currentAge = deathYear - person.yearOfBirth;
    if(currentAge > oldestAge) {
      oldestAge = currentAge;
      return person;
    }
    else {
      return oldPerson;
    }
  }, {}); 

  console.log(oldest);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
