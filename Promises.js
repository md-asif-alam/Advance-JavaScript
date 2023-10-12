const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rollNo = [1, 2, 3, 4, 5];
    // resolve(rollNo);
    reject("Error while communicating");
  }, 2000);
});

const getBioData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexData) => {
        const bioData = {
          name: "Asif",
          age: 26,
        };
        resolve(`My roll number is ${indexData}. My name is ${bioData.name} and
            my age is ${bioData.age}`);
      },
      2000,
      indexData
    );
  });
};

pobj1
  .then((rollno) => {
    console.log(rollno);
    return getBioData(rollno[1]);
  })
  .then((kuchbhi) => {
    console.log(kuchbhi);
  })
  .catch((error) => {
    console.log(error);
  });
