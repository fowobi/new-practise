
let salem = {
  // fill in object here
  firstName:"salem",
  yearOfBirth:1980,
  countryOfOrigin:"Sudan"
};
let ijeoma = {
    firstName:"ijeoma",
    yearOfBirth:1995,
    countryOfOrigin:"Nigeria"

};
console.table(salem);
console.table(ijeoma);
logInformationAbout(salem);
logInformationAbout(ijeoma);


// create an object here and assign it to a variable called ijeoma

// This function is provided. You should not modify it!
// It takes as input a person -> how it uses the fields
// in the person object will tell you what fields to put in the
// objects above
function logInformationAbout(person) {
  let age = 2023 - person.yearOfBirth;
  console.log(
    `${person.firstName} is from ${person.countryOfOrigin}`,
    `and will be ${age} years old in 2023`
  );
}