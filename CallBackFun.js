// const funA = () => {
//   setTimeout(function () {
//     console.log("function A");
//   }, 3000);
// };

// const funB = () => {
//   console.log("Function B");
// };

// funA();
// funB();
const perOne = (friend, callFrnd) => {
  console.log(
    `I am busy right now. I am talking to ${friend}. I will call you back`
  );
  callFrnd();
};

const perTwo = () => {
  console.log("Hey whats up now I am free.");
};

perOne("Asif", perTwo);
// perTwo();
