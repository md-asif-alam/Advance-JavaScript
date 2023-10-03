//default function parameters allow named parameters
//to be initialiazed with default values if no value or undefined is passed!
// function mult(a, b = 2) {
//   console.log(a * b);
// }

const mult = (a, b = 4) => {
  console.log(`the multiplication is ${a * b}`);
};

mult(4);
