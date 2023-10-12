const getRollNo = () => {
  setTimeout(() => {
    console.log("API getting Roll Number");
    let rollNo = [1, 2, 3, 4, 5];
    console.log(rollNo);

    setTimeout(
      (roll_no) => {
        const bioData = {
          name: "Asif",
          age: 26,
        };
        console.log(`My roll number is ${roll_no}. My name is ${bioData.name} and
            my age is ${bioData.age}`);

        setTimeout(
          (name) => {
            bioData.gender = "Male";
            console.log(`My roll number is ${roll_no}. My name is ${bioData.name} and
            my age is ${bioData.age} and My gender is ${bioData.gender}`);
          },
          2000,
          bioData.name
        );
      },

      2000,
      rollNo[1]
    );
  }, 2000);
};

getRollNo();
