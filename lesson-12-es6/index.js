// const sum = (a, b) => {
//   return a + b;
// };

const sum = (a, b) => a + b;

const num_1 = 8;
const num_2 = 15;
// console.log("Tổng của ", num_1, "+", num_2, "=", sum(num_1, num_2));
const result = `Tổng của ${num_1} + ${num_2} = ${sum(num_1, num_2)}`;
console.log(result);

const greeting = (studentName = "friend") => {
  console.log(`Hello ${studentName}, welcome to our class`);
};

greeting("Alex");
greeting("Phillip");
greeting();

// Array functions
const nums = [10, 3, 6];

// let doubleNums = [];
// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   doubleNums.push(num * 2);
// }

let doubleNums = nums.map((num) => num * 2);
console.log("doubleNums:", doubleNums);

const studentsInput = [
  {
    firstName: "Nguyen",
    lastName: "A",
    math: 10,
    english: 8,
    chemistry: 7,
  },
  {
    firstName: "Le",
    lastName: "B",
    math: 9,
    english: 8,
    chemistry: 8,
  },
  {
    firstName: "Phan",
    lastName: "C",
    math: 5,
    english: 6,
    chemistry: 7,
  },
];

// Auto messaging after every class
// Fullname, gpa = (math + english + chemistry) /3
/*
    [
        {
            fullName: "Le B",
            gpa: 8,3
        }
    ]
*/

// Arrow function
// Map
// String literals
const preprocessingStudentData = (students) => {
  return students.map((student) => {
    // Destructuring
    const { firstName, lastName, math, english, chemistry } = student;
    return {
      fullName: `${firstName} ${lastName}`,
      gpa: ((math + english + chemistry) / 3).toFixed(2),
    };
  });
};

console.log("Data dã được xử lý:", preprocessingStudentData(studentsInput));
