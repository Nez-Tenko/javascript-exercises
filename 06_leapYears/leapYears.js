const leapYears = function(year) {
  /*
  if(year % 4 ===0) {
    if(year % 100 === 0 && year % 4 !== 0) {
      return false;
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
  */
  
  mod4 = (year % 4 === 0);
  mod100 = (year % 100 === 0);
  mod400 = (year % 400 == 0);
  

  if(mod4 && (!mod100 || mod400)) {
    return true;
  }
  else {
    return false;
  }


};

// Do not edit below this line
module.exports = leapYears;
