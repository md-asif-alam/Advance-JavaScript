//The Destructuring Assignment syntax is a JavaScript expression that
//makes it possible to Unpack values from arrays, or properties from
//objects into distinct values

const bioData = {
  name: "Asif",
  age: 26,
  deg: "B.tech",
  hobb: {
    first: "playing",
    second: "Making YouTube Videos",
  },
};

// console.log(`My name is ${bioData.name}`);
let { name: myName, age, deg, hobb } = bioData;
console.log(`My name is ${myName} and I love making ${hobb.second}`);
