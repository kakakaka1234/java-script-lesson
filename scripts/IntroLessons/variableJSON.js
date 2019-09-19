console.log("You made it to the console");

console.log('');
console.log('');


let person1 = {
  firstName: "Luong",
  lastName: "Hoang",
  age: 17, //Not my real age :)
  favoriteNumber: 22, //security feature
  haircolor: null, // explore: undefined, null; origonally "none"
  // debug with typeof
  male: true,
  female: false,
  other: false,
  country: undefined,
  sport: undefined,
};

let person2 = {
  firstName: "Viet",
  lastName: "Truong",
  age: 17, //Not my real age :)
  favoriteNumber: 0, //security feature
  haircolor: null, // explore: undefined, null; origonally "none"
  // debug with typeof
  male: false,
  female: true,
  other: false,
  country:undefined,
  sport:undefined,
};

// Print variables to console
// console.log(); illustrate object notation with dot notation
console.log(person1.lastName); //Accesses an object's key:value
console.log(person2.firstName);
console.log(person2.hair); console.log("Am I male? " + person2.male); // To check for TRUE value use If Statements, or use developer manual
