const users = ["hoang@gmail.com", "hoang12@gmail.com", "hoangnm@gmail.com"];

const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirmPasswordElement = document.getElementById("confirmPassword");
const validElement = document.getElementById("valid");
const form = document.getElementById("form");
const validEmailElement = document.getElementById("validEmail");
const validPasswordlength6Element = document.getElementById(
  "validPasswordlength6"
);
const validPasswordTextUpperCaseElement = document.getElementById(
  "validPasswordTextUpperCase"
);
const validConfirmPasswordElement = document.getElementById(
  "validConfirmPassword"
);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validEmail(emailElement.value);
  validPasswordlength6(passwordElement.value);
  validPasswordTextUpperCase(passwordElement.value);
  confirmPassword(passwordElement.value, confirmPasswordElement.value);

  // Nếu tất cả các điều kiện đúng thì báo đăng ký thành công và lưu kết quả vào localStorage
  if (
    validEmail(emailElement.value) &&
    validPasswordlength6(passwordElement.value) &&
    validPasswordTextUpperCase(passwordElement.value) &&
    confirmPassword(passwordElement.value, confirmPasswordElement.value)
  ) {
    validElement.innerText = "Đăng ký thành công!";
    const user = {
      email: emailElement.value,
      password: passwordElement.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "./login.html";
  }
});

/**
 * 2. Kiểm tra xem email đã tồn tại hay chưa? biết rằng trong cơ sở dữ liệu có các account sau: hoang@gmail.com; hoang12@gmail.com; hoangnm@gmail.com
   Nếu email đã tồn tại thì không cho đăng ký.
 */
const validEmail = (email) => {
  for (let i = 0; i < users.length; i++) {
    if (email === users[i]) {
      // Kiểm tra nếu email tồn tại trong Database thì trả ra false
      // -> Tức là email này đã tồn tại và không thể đăng ký tạo mới nữa.

      validEmailElement.innerText = "Email đã tồn tại!";
      return false;
    } else {
      validEmailElement.innerText = "";
      return true;
    }
  }
};

//3. Kiểm tra password có ít nhất 1 ký tự viết hoa và có ít nhất 6 ký tự.

const validPasswordlength6 = (password) => {
  if (password.length < 6) {
    validPasswordlength6Element.innerText = "Password có ít nhất 6 ký tự!";
    console.log(2222);
    return false;
  } else {
    validPasswordlength6Element.innerText = "";
    return true;
  }
};

const validPasswordTextUpperCase = (password) => {
  let temp = 0;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      temp++;
      validPasswordTextUpperCaseElement.innerText = "";
    } else {
      validPasswordTextUpperCaseElement.innerText =
        "Password phai co it nhat 1 ky tu viet hoa";
    }
  }

  if (temp === 0) {
    validPasswordTextUpperCaseElement.innerText =
      "Mat khau phai co it nhat 1 ky tu viet hoa";
    return false;
  } else {
    validPasswordTextUpperCaseElement.innerText = "";
    return true;
  }
};

//4. Kiểm tra confirmPassword === password.

const confirmPassword = (confPass, pass) => {
  if (confPass !== pass) {
    validConfirmPasswordElement.innerText = "Mật khẩu không khớp!";
    return false;
  } else {
    validConfirmPasswordElement.innerText = "";
    return true;
  }
};
