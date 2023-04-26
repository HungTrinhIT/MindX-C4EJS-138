/*------------------------------------------------------
    Bài 1
    Viết 1 function kiểm tra xem tháng đó có bao nhiêu ngày
    Biết rằng:
        Input: month, year
        Output: số ngày của tháng
    Nếu tháng không hợp lệ: trả về giá trị là -1
*/

function getDayFromMonthAndYear(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      // Logic kiểm tra xem có 28 hay 29 ngày nha
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 29;
      } else {
        return 28;
      }
    default:
      return -1;
  }
}
// console.log(getDayFromMonthAndYear(2, 2016)); // 29
// console.log(getDayFromMonthAndYear(3, 2016)); // 31
// console.log(getDayFromMonthAndYear(13, 2016)); // -1

/* ------------------------------------------------------
    Bài 2
    Viết một function để tìm số lớn trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị lớn nhất của mảng
*/
function findMax(nums) {
  let maxNumber = nums[0];
  // Your code here
  for (let i = 0; i < nums.length; i++) {
    // So sánh
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }

  return maxNumber;
}
console.log(findMax([1, 1, 1, 1])); // 1
console.log(findMax([-1, 10, 100, 15, -20, 0])); // 100
console.log(findMax([8, 20, 15, 16, 17, -100, -200, -18])); //20

/* ------------------------------------------------------
    Bài 3
    Viết một function để tìm số nhỏ trong mảng một chiều
    Input: Mảng một chiều các số nguyên
    Output: Giá trị nhỏ nhất của mảng
*/
function findMin(nums) {
  let minNumber;
  // Your code here
  for (let i = 0; i < nums.length; i++) {
    // So sánh
    if (nums[i] < minNumber) {
      minNumber = nums[i];
    }
  }

  return minNumber;
}
// console.log(findMin([1, 1, 1, 1])); // 1
// console.log(findMin([-1, 10, 100, 15, -20, 0])); // -20
// console.log(findMin([8, 20, 15, 16, 17, -100, -605, -18])); // -605

/* ------------------------------------------------------
    Bài 5
    Viết một function  , chèn phần tử vào một vị trí bất kì trong mảng
    Input: 
        + array: mảng cần chèn
        + position: vị trí chèn
        + value: giá trị chèn
    Output: mảng mới với giá trị đã được chèn vào
*/
function insert(array, position, value) {
  let firstArr = array.slice(0, position);
  let lastArr = array.slice(position, array.length);

  firstArr.push(value);
  return firstArr.concat(lastArr);
}

const test_array = [10, -5, 6, 8, 7];

console.log("Bài 5", insert(test_array, 1, 100)); // [10,100, -5, 6, 8, 7]
console.log("Bài 5", insert(test_array, 5, 10000)); // [10, -5, 6, 8, 7, 10000]
console.log("Bài 5", insert(test_array, 0, 8888)); // [ 8888,10, -5, 6, 8, 7]

/*------------------------------------------------------
    Bài 6
    Viết một function, với dữ liệu đầu vào là một mảng một chiều 
    ⇒ trả về một mảng mới bao gồm kiểu dữ liệu(data type) của từng phẩn tử trong mảng
    Cách lấy datatype của một biến: // typeof(variable) => kieu du lieu
*/
function arrayValuesTypes(array) {
  let new_array = [];
  // Your code here
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    new_array.push(typeof value);
  }

  return new_array;
}

console.log(arrayValuesTypes([1, 2, "null", []]));
//[("number", "number", "string", "object")]

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
//["string", "boolean", "boolean", "number", "number", "object", "object"]

console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);
//["number", "string", "string", "object", "object", "boolean", "number"]

// Bài 7
/* ------------------------------------------------------
    Viết một hàm, kết quả trả về là một mảng 
    bao gồm các phần tử khác biệt từ 2 mảng cho trước
*/

// tìm thấy finNumber => return vị trí index tìm thấy
// tìm không thấy => return -1
function findIndex(arr, findNumber) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findNumber) {
      return i;
    }
  }

  return -1;
}

function difference(arr1, arr2) {
  let result = arr1;
  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    // không tìm thấy trong mảng arr1
    // thì đi push cái mảng result
    if (findIndex(result, element) === -1) {
      result.push(element);
    }
  }

  return result;
}
console.log(difference([1, 2, 3], [10, 10, 10, 5, 7, 3, 4, 100, 2, 1, 10]));

//[1, 2, 3], [100, 2, 1, 10]
// [1,2,3,100 ,10]
