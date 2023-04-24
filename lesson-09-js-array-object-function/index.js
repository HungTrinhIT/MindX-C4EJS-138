let car1 = "Honda";
let car2 = "Suzuki";
let car3 = "KIV";
let car100 = "Martin";

//  Xin chào bạn, mời bạn trải nghiệm dòng xe "_"
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car1);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car2);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car3);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car100);

// Array: mảng, danh sách
let cars = ["Honda", "Suzuki", "KIV", "Martin"];
cars.push("Datbike");
cars.push("Ford");
cars.push("Căng Hải");
cars.push("Toyota");
cars.push("Mazda");
cars.push("Merc");

// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[0]);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[1]);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[2]);
// console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", cars[3]);

/*
    - Mảng xe hơi cars [ ]
    - Mỗi phần tử trong mảng (element) sẽ ngăn cách bởi dấu ,
    - index => Chỉ số của mảng
            => sẽ bắt đầu từ vị trí thứ 0
    - length => chiều dài của mảng
*/

// Cách duyệt một mảng một chiều
// Car đang có chiều dài là 4:
// i < 4 => i bé hơn hoặc bằng 3
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe:", car);
}

console.log("BEFORE POP: Tổng số xe ở trong xưởng là:", cars.length); // 10
console.log("BEFORE POP: Tổng số xe ở trong xưởng là:", cars); // 10

cars.pop();
console.log("AFTER POP: Tổng số xe ở trong xưởng là:", cars.length);
console.log("AFTER POP: Tổng số xe ở trong xưởng là:", cars);

const firstArr = [1, 2, 123, 125, 192, 4];
const secondArr = [-19, 2, 4, 6, 1];
const result = firstArr.concat(secondArr);
console.log("First Arr:", firstArr);
console.log("Second Arr:", secondArr);
console.log("Result array:", result);

// Objects
// Cách truy xuất đến các giá trị
// Cách lặp qua từng thuộc tính
let myCar = {
  name: "Mazda",
  releaseYear: "2018",
  price: 20000,
  color: "black",
};

console.log("Chiếc xe được sản xuất năm:", myCar.releaseYear);
const carName = myCar.name;

// Dynamic key
const key = "price";
console.log(myCar[key]); // 20000

// Lặp qua các thuộc tính của một object
for (let carKey in myCar) {
  const value = myCar[carKey];
  console.log(carKey, " -  ", value);
}

console.log("MyCar trước khi xoá thuộc tính releaseYear:", myCar);
delete myCar.releaseYear;
console.log("MyCar sau khi xoá thuộc tính releaseYear:", myCar);

const additionalCarInformation = {
  quantity: 100,
  maximumSpeed: "300km/h",
};

const fullInformationCar = Object.assign(myCar, additionalCarInformation);
console.log(fullInformationCar);

const person = {
  name: "Messi",
  age: 36,
  major: "Cầu thủ bóng đá",
  salary: 7000000,
  favoritColor: ["red", "yellow", "blue"],
  isHandsome: true,
  //   address: "125 Hai Bà Trưng, quận 1, Hồ Chí Minh"
  address: {
    no: 125,
    street: "Hai Bà Trưng",
    district: "Quận 1",
    city: {
      cityName: "Hồ Chí Minh",
      cityCode: "000088",
    },
  },
};

if (Boolean(person.isHandsome)) {
  console.log("Bạn đẹp trai nhất đấy, xứng đáng có 10 người yêu");
} else {
  console.log("Bạn hơi hơi đẹp trai");
}

// Bài 1
// Input: là một một chiều
// Output: số lượng các phần tử chẵn có trong mảng một chiều này
let problemOneInput = [-10, 20, 5, 6, 7, 9, 11, 13, 0, 1, 100];
let count = 0;
for (let i = 0; i < problemOneInput.length; i++) {
  let num = problemOneInput[i];
  if (num % 2 === 0) {
    count++;
  }
}
console.log(count);

// Bài 2
// Input: mảng một chiều
// Output: tổng các phần tử bé hơn 0 mà là số chẵn
let problemTwoInput = [-100, 31, 15, -6, 28, -5, -12, -16, -30, 1, 2, 5];

// Bài 3
/*
    Cho một mảng một chiều, trong đó tất cả các phần tử của mảng 
    đều là số chẵn  hoặc tất cả đều là số lẻ. Ngoại trừ duy nhất 
    một số khác biệt (outlier number). 
    Hãy viết một hàm để tìm ra số khác biệt đó

    Notes: Độ dài của mảng: `array.length ≥ 3`

    [2, 3, 4] ➞ 3
    [1, 2, 3] ➞ 2
    [4, 1, 3, 5, 9] ➞ 4
*/

let outlinerInput = [4, 1, 3, 5, 9];
let oddNumbers = [];
let evenNumbers = [];

// Duyệt mảng
for (let i = 0; i < outlinerInput.length; i++) {
  let num = outlinerInput[i];
  // Num mà chẵn thì push vô mảng evenNumbers

  // Ngược lại push vô mảng oddNumbers
}

// Kiểm tra mảng nào có 1 phần tử

// thì thằng ngoại lai là phần tử thứ 0 của mảng đó

/*
  1. Thêm phần tử vào đầu/cuối/ một vị trí bất kì trong mảng
  2. Xoá phần tử đầu/cuối/một ví trị bất kì trong mảng
  3. Săp xếp mảng theo thứ tự tăng dần/giảm dần
  4. Nối mảng từ 2 hay nhiều mảng
  5. Duyệt mảng
  6. Truy xuất một phần tử bất kì trong mảng
  7. Tìm giá trị lớn nhất trong mảng
  8. Tìm giá trị nhỏ nhất trong mảng
*/

// Function
const students = [
  {
    name: "Nguyen Van A",
    gender: "male",
    math: 8,
    english: 7,
    chemischy: 6,
  },
  {
    name: "Nguyen Van B",
    gender: "male",
    math: 10,
    english: 4,
    chemischy: 2,
  },
  {
    name: "Nguyen Thi C",
    gender: "female",
    math: 10,
    english: 5,
    chemischy: 3,
  },
];

// const gpa_1 =
//   (students[0].math + students[0].chemischy + students[0].english) / 3;
// const gpa_2 =
//   (students[1].math + students[1].chemischy + students[1].english) / 3;
// const gpa_3 =
//   (students[3].math + students[3].chemischy + students[3].english) / 3;

// Input: diem toan, diem tieng anh, diem hoa
// Output: Diem trung binh
// Function => hàm

// Function không có tham số đầu vào
function greeting() {
  console.log("Hello bro, welcome to MindX Technology");
}

greeting();
greeting();
greeting();

// Function với 1 tham số đầu vào
function greetingWithName(name) {
  console.log("Hello " + name + ", welcome to MindX Technology");
}
greetingWithName("Ronaldo");
greetingWithName("Messi");
greetingWithName("Mitoma");

function calculateScore(math, chemistry, english) {
  const result = (math + chemistry + english) / 3;

  return result;
}
const studentAScore = calculateScore(10, 8, 7);
const studentBScore = calculateScore(6, 5, 10);
console.log("Điểm trung bình của HS A là:", studentAScore);
console.log("Điểm trung bình của HS B là:", studentBScore);

if (studentAScore > studentBScore) {
  console.log("Học sinh A học giỏi hơn học sinh B");
} else {
  console.log("Học sinh B học giỏi hơn học sinh A");
}

// Primitive datatype (kiểu dữ liệu nguyên thuỷ)
// Reference datatype: array, object (kiểu dữ liệu tham chiếu)
