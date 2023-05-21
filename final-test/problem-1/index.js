function calc() {
  // DOM
  console.log("I am on button");
  const numOne = document.getElementById("num1");
  const numTwo = document.getElementById("num2");
  const resultEle = document.getElementById("result");

  const numOneValue = Number(numOne.value);
  const numTwoValue = Number(numTwo.value);
  console.log("numOneValue:", numOneValue);
  console.log("numTwoValue:", numTwoValue);

  if (numOneValue > numTwoValue) {
    resultEle.innerHTML = `Số thứ nhất phải bé hơn số thứ 2`;
    return;
  }

  // Tìm tổng các số nguyên tố từ numOne -> numTwo
  let sum = 0;

  for (let i = numOneValue; i <= numTwoValue; i++) {
    // kiểm tra xem thằng i có phải số nguyên tố hay không
    const isPrimeNumber = isPrime(i);
    if (isPrimeNumber) {
      sum += i;
    }
  }

  resultEle.innerHTML = `Tổng các số nguyên tố từ ${numOneValue} đến ${numTwoValue} là ${sum}`;
}

function isPrime(a) {
  if (a < 2) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      count += 1;
    }
  }

  if (count > 2) {
    return false;
  }

  return true;
}
// sum = 0
// 10 ... 15
// 10 11 12 13 14 15
// sum = sum + 11 = 0 + 11 = 11
// sum = sum + 13 = 11 + 13
// prime
