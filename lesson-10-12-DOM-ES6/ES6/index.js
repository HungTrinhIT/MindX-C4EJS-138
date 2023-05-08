// Arrow function:
// Mỗi một function sinh ra đêù nhớ được nơi mà nó sinh ra -> Ngữ cảnh (context).
// Nhưng riêng arrow function không nhớ được ngữ cảnh của bản thân -> Nó lấy ngữ cảnh của đối tượng gần nhất với nó.

// import DataProduct from "./datas.js"; // export default
// import { products, user } from "datas.js"; // export named

{
  {
    {
      {
        {
          {
            function sum3(a, b) {
              return a + b;
            }
          }
        }
      }
    }
  }
}

const sum = (a, b) => {
  return a + b;
};

// sum2(1, 2);

const sum2 = (a, b) => a + b;

const first = "Hoang";
const last = "Tèo";
// console.log(`Xin chào bạn ${first} ${last}`);

// console.log(sanPham);

/**
 * Spread and rest
 */

const nhom3 = ["Hung", "Cuong"];
const nhom4 = ["Chung", "Lien"];
// const nhom4clone = nhom4;
// nhom4clone.push("Tý");
const nhom4clone = [...nhom4];
nhom4clone.push("Tý");
console.log(nhom4);
console.log(nhom4clone);
const nhom5 = [...nhom3, ...nhom4, "Tèo"]; // spread
// console.log(nhom5);

const user = {
  name: "Hoang",
  age: 18,
  address: "HN",
  password: "12345678",
  confirmPassword: "12345678",
};

// destructuring
const { name, age, address, password, confirmPassword } = user;

//Step 1: Kiem tra name có tối thiểu 6 ký tự. (name)
//Step 2: Kiem tra tuổi có trên 18 tuổi hay không. (age)
// Spread thì nó dải phẳng array, object >< Rest thì gom lại.

console.log(name);
console.log(age);
console.log(address);

// Arguments
function tong(...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}

console.log(tong(1, 2, 3, 4, 5)); // 15
