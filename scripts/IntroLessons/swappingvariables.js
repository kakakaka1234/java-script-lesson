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
  male: true,
  female: false,
  other: false,
  country:undefined,
  sport:undefined,
};
console.log(person1);
console.log(person2);




let swap = person1.lastName;
person1.lastName= person2.lastName;
console.log(person1);
