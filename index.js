var getMilitaryTime = function(input) {
  // split into hours, minutes & seconds
  const timeParts = input.split(':');
  // slice the AM or PM from the seconds
  const amPm = timeParts[2].slice(2);
  
  // parseint index[0], which is ours so as to be able to perform
  // arithmetic.
  let hour = parseInt(timeParts[0]);
  const minute = timeParts[1];
  
  // seconds = index[2] sliced from the first 2 digits
  const second = timeParts[2].slice(0, 2);

  // this is so as to add 12 to hours after 12:59PM
  if (amPm === "PM" && hour !== 12) {
    hour += 12;
    // to set 12:00AM to OO
  } else if (amPm === "AM" && hour === 12) {
    hour = 0;
  }
  
  //padstart is important since it turns 1:56AM to 01:56
  // this is done by padding the number in question until it reaches 2 digits
  // the number to pad it with is '0'
  // we use the toString method since the output should be a string.
  const militaryTime = `${hour.toString().padStart(2, '0')}:${minute}:${second}`;
  return militaryTime;
};

// Test examples
console.log(getMilitaryTime("07:05:45PM"));  // Output: "19:05:45"
console.log(getMilitaryTime("12:00:01AM"));  // Output: "00:00:01"
console.log(getMilitaryTime("11:46:47PM"));  // Output: "23:46:47"
