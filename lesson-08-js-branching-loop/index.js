// Khai báo biến với từ khoá const
const num_1 = 10;

// Khai báo biến với từ khoá let
let num_2 = 105;
let PI = 3.14;
PI = 3.1414;

/*
 - Comment 
 theo
 multiple lines
*/

let sum = num_1 + num_2;
console.log(sum);
console.log("PI is:", PI);

// Camel case
const firstName = "Hung";
const lastName = "Trinh";

const anotherFirstName = "Cristiano";

// Snake case
const another_last_name = "Ronaldo";

console.log(firstName);
console.log(lastName);

/*
    JS chia làm 2 loại kiểu dữ liệu

    Primitive Datatypes (Kiểu dữ liệu nguyên thuỷ)
        - number: 1 2 10 3.14 1000 -10
        - string: "Hello Mindx" ""
        - boolean: true/false
        - null
        - undefined

    Reference Datatypes (Kiểu dữ liệu tham chiếu)
        - object
        - array (object đặc biệc)
*/

const specialNumber = null;

console.log("specialNumber:", specialNumber);

/*
    1. Sự khác biệt giữa const, let và var
    2. Các kiểu dữ liệu ở trong JS
    3. Sự khác nhau giữa null và undefined
    4. Các scope ở trong JS
    5. Sự khác nhau giữa  == và ===
*/
console.log("-------------SCOPE--------------");
let x = 10;
{
  let y = 15;
  console.log(x); // 10
  console.log(y); // 15
}

console.log(x); // 10
// console.log(y); // Không truy xuất được biến y ở scope con

// Input: Nhập vào năm sinh
// Output: Kiểm tra xem người này có đủ tuổi lái xe máy hay không
// >, <, >=, <=, ==, ===, !=, !==
const age = 100;

// if (age >= 18) {
//   console.log("Bạn đã đủ tuổi lái xe máy");
// }

// if (age < 18) {
//   console.log("Bạn chưa đủ tuổi lái xe máy");
// }

if (age >= 18) {
  console.log("Bạn đã đủ tuổi lái xe máy");
} else {
  console.log("Bạn chưa đủ tuổi lái xe máy");
}

/*  Input: Điểm trung bình học sinh
    - Nếu: >= 8 => Giỏi
    - Nếu: <8 và >= 6,5 => Khá
    - Nếu: >= 5 và <6.5 trung bình
    - Ngược lại: Ở lại lớp (Yêu)
 */

const studentScore = 4.94;

// if (studentScore >= 8) {
//   console.log("Provip đấy => GIỎI");
// }

// if (studentScore >= 6.5 && studentScore < 8) {
//   console.log("Cần cải thiện nhiều hơn nha => KHÁ");
// }

// if (studentScore >= 5 && studentScore < 6.5) {
//   console.log("Hên là vẫn lên lớp đó => TRUNG BÌNH");
// }

// if (studentScore < 5) {
//   console.log("Chia buồn nha  => R.I.P Ở lại lớp");
// }

// if, else-if , else
if (studentScore >= 8) {
  console.log("Provip đấy => GIỎI");
} else if (studentScore >= 6.5) {
  console.log("Cần cải thiện nhiều hơn nha => KHÁ");
} else if (studentScore >= 5) {
  console.log("Hên là vẫn lên lớp đó => TRUNG BÌNH");
} else {
  console.log("Chia buồn nha  => R.I.P Ở lại lớp");
}

// Câu lệnh switch-case => Sử dụng cho phép so sánh bằng

/*
    review: 1 -> 5
    1: Quá dở
    2: Dở
    3: Tạm được
    4: Hay
    5: Siêu cấp vip pro, nên xem 
*/
const rating = 6;
switch (rating) {
  case 1:
    console.log("Phim quá dở");
    break;
  case 2:
    console.log("Phim dở");
    break;
  case 3:
    console.log("Phim tạm được");
    break;
  case 4:
    console.log("Phim hay");
    break;
  case 5:
    console.log("Phim Siêu cấp vip pro, nên xem");
    break;
  default:
    console.log("Giá trị không hợp lệ");
}

const month = 13;
const year = 2012;
/*
    - Tháng nào có 30 ngày: 4,6,9,11
    - Tháng nào có 31 ngày: 1,3,5,7,8, 10, 12
    - Tháng nào 28,29 ngày: 2

    Năm nhuận là:
     - Năm chia hết cho 4 và không chia hết cho 100
     - Hoặc những năm chia hết 400


*/
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng này có 31 ngày");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng này có 30 ngày");
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Đây là tháng có 29 ngày");
    } else {
      console.log("Đây là tháng có 28 ngày");
    }
  default:
    console.log("Tháng và năm không hợp lệ");
}

// Vòng lặp
// Vòng lặp for
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

/*
    i = 0 => 1
    i = 1 => 2

    ....
    i=100 => 100
    i = 101 > 100
*/

// Tính tổng từ 1 đến 10
// let sum = 0;
// 1 2 3 4 5 6 7 8 9 10
// index => i
let sumFromOneToTen = 0;
for (let i = 1; i <= 10; i++) {
  sumFromOneToTen = sumFromOneToTen + i;
}
console.log("Tổng từ 1 đến 10 là:", sumFromOneToTen);

// Tính tổng các sỗ chẵn từ 1 đến 10
// let sum = 0;
// 1 2 3 4 5 6 7 8 9 10 => 2 + 4 + 6 + 8 + 10 = 30
// index => i
let sumOfEvenNumberFromOneToTen = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sumOfEvenNumberFromOneToTen = sumOfEvenNumberFromOneToTen + i;
  }
}

console.log(" Tổng các số chẵn từ 1 đến 10 là:", sumOfEvenNumberFromOneToTen);

// Bài 1
// Đếm xem từ 1 tới 15 có bao nhiêu ước
// Gợi ý dùng vòng lặp for,
// tạo một biến đếm lưu trữ số lượng ước
let countDivisor = 0;
for (let i = 1; i <= 15; i++) {
  if (15 % i === 0) {
    // countDivisor = countDivisor + 1;
    countDivisor += 1;
  }
}
console.log("Số lượng ước của 15 là:", countDivisor);
// Bài 2
// Tính tổng các ước từ 1 đến 15
// Gợi ý dùng vòng lặp for,
// tạo một biến tổng lưu trữ số lượng ước

let sumOfDivisor = 0;
for (let i = 1; i <= 15; i++) {
  if (15 % i === 0) {
    sumOfDivisor += i;
  }
}
console.log("Tổng các ước của 15 là:", sumOfDivisor);
// 1 ,3 5, 15

// Bài 3
// Tính tổng các số chẵn từ 10 đến 50

let sumFrom10_to_50For = 0;
for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    // sumFrom10_to_50For = sumFrom10_to_50For + i;
    sumFrom10_to_50For += i;
  }
}

console.log("FOR: Tổng các số chẵn từ 10 đến 50 ", sumFrom10_to_50For);

let index = 10;
let sumFrom10_to_50While = 0;
while (index <= 50) {
  if (index % 2 === 0) {
    sumFrom10_to_50While += index;
  }

  index++;
}
console.log("While: Tổng các số chẵn từ 10 đến 50 ", sumFrom10_to_50While);
