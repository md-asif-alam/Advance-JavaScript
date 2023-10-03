//var-->function scoped
//let and const-->block scoped

// let name = "Asif";
// console.log(name);

// const name = "Md ASif Alam"
// console.log(name)

// var name = "Asif";
// name = "Alam";
// console.log(name);

// let name = "Asif";
// name = "Alam";
// console.log(name);

// const name = "Asif";
// name = "Alam";//TypeError: Assignment to constant variable.
// console.log(name);

// function modJs(love) {
//   if (love) {
//     let name = "Asif";
//     const sname = "Alam";
//   }
//   console.log("My name is:" + name + " " + sname); //ReferenceError: name is not defined
// }

// function modJs(love) {
//   if (love) {
//     var name = "Asif";
//     var sname = "Alam";
//   }
//   console.log("My name is:" + name + " " + sname);
// }
// modJs(true);

// var whoWillWinToday = "India";
// if (true) {
//   var whoWillWinToday = "NewZealand";
//   console.log(whoWillWinToday);
// }
// console.log(whoWillWinToday);

// let whoWillWinToday = "India";
// if (true) {
//   let whoWillWinToday = "NewZealand";
//   console.log(whoWillWinToday);
// }
// console.log(whoWillWinToday);

const whoWillWinToday = "India";
if (true) {
  const whoWillWinToday = "NewZealand";
  console.log(whoWillWinToday);
}
console.log(whoWillWinToday);
