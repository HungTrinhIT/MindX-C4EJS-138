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

// [1 , 10, 5, 7, 9 ,8 , 2];
const filterFunctionInput = [1, 10, 5, 7, 9, 8, 2];
// const evenNumbers = filterFunctionInput.filter((num) => {
//   const isEvenNumber = num % 2 === 0;
//   return isEvenNumber;
// });

const evenNumbers = filterFunctionInput.filter((num) => num % 2 === 0);
console.log("Mảng các số chẵn là:", evenNumbers);

const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];

// Cách 1
const getGPA_1 = (scores) => {
  let gpa = 0;

  for (let i = 0; i < scores.length; i++) {
    const subject = scores[i];
    gpa += subject.score * subject.weight;
  }

  return gpa;
};

console.log("Điểm TB cách 1:", getGPA_1(scores));

// Cách 2: Dùng hàm reduce
const getGPA_2 = (scores) => {
  return scores.reduce((gpa, subject) => {
    return gpa + subject.score * subject.weight;
  }, 0);
};

console.log("Điểm TB cách 2:", getGPA_2(scores));


/*
  I. Test
  1. Problem solving => Javascript =>
    + Flow control: if, else, else if, switch case
    + for, for...in, while
    + data types
    + array, array manipulation
    + object, object manipulation
    + ES6
      . destructering
      . arrow function
      . template literals
      . default value
      . array function: map, filter, reduce, some, every
    
  2. HTML, CSS, Javascript DOM
    + Figma
    + fetch()

    
  II. Project 
  - Landing page
    + Showcase những sản phẩm của nhà hàng
    + Dự báo thời tiết: dữ liệu weather API
    
*/ 