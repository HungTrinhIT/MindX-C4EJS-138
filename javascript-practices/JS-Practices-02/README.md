
# Bài tập Javascript tổng hợp: Array, Object, Function


### Bài 1 - Get Sum of People's Budget
Hãy viết `function` tính tổng lương mà công ty phải trả hằng tháng cho nhân viên. Biết rằng mỗi nhân viên sẽ là một object với cấu trúc như sau:
```
{
    name: "John", 
    age: 21, 
    budget: 23000 
}
```

Exmaple code
```
function getTotalSalary(employees){
    // Your code here
}
```

Test case
```
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600
```


### Bài 2 - Online shopping
Hãy viết `function` để kiểm tra xem đơn đặt hàng `Shoppe` có đủ điều kiện để miễn phí giao hàng hay không. Nếu đơn giao hàngd đó đủ điều kiện thi function sẽ trả về giá trị `true`, ngược lại trả về giá trị `false`, biết rằng:

* Tổng chi phí của các mặt hàng ≥ $50.00 sẽ được miến phí ship
* Tổng chi phí của các mặt hàng < $50.00 sẽ phải trả tiền ship

Cấu trúc của mỗi đơn hàng`
```
{ "Shampoo": 5.99, "Rubber Ducks": 15.99 }
```

Example code
```
function freeShipping(order){
    // Your logic code here


}
```

Test case 
```
freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
```


### Bài 3 - International Greeting
Giả sử bạn có một object lưu trữ thông tin của các học sinh đến từ nhiều quốc gia khác nhau dưới dạng key-value pairs như sau:
```
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
```
Hãy viết một function nhận vào `name` của một người trong `GUEST_LIST` và trả về như sau:

- "Hi! I'm [name], and I'm from [country]."
- Nếu `name` không tồn tại trong  `GUEST_LIST` , return: :   `Hi! I'm a guest.`

Test case
```
greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest."
```

### Bài 4 - Profile Lookup
Ta có một mảng các đối tượng đại diện cho các người khác nhau trong `danh sách liên lạc`. Một hàm lookUpProfile đã được viết sẵn cho bạn, nhận vào hai đối số là tên `(name)` và một thuộc tính `(prop)`. Hàm này sẽ kiểm tra xem name có phải là `firstName` của một `contact` thực sự hay không và thuộc tính `(prop)` đã cho có phải là thuộc tính của contact đó hay không.

- Nếu cả hai điều kiện đều đúng, thì hàm sẽ trả về giá trị của thuộc tính đó.
- Nếu `name` không tương ứng với bất kỳ contact nào thì hàm sẽ trả về `"Không tìm thấy liên hệ"`.
- Nếu prop không tương ứng với bất kỳ thuộc tính hợp lệ nào của một contact được tìm thấy để phù hợp với name thì hàm sẽ trả về `"Không tìm thấy thuộc tính"`.

```
// Setup
let contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    // Only change code above this line
}

lookUpProfile("Akira", "likes");
```

### Bài 5 - Letters Counting
Hãy viết một function `countLetters`, nhận vào một chuỗi và trả về một object đại diện số lần xuất hiện của từng ký tự xuất hiện trong chuỗi đó
Ví dụ:
```
Input: countLetters('hello world')); 
Output
    { 
        h: 1, 
        e: 1, 
        l: 3, 
        o: 2, 
        ' ': 1, 
        w: 1, 
        r: 1, 
        d: 1 
    }

function countLetters(str){
    
}
```