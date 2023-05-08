const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const user = JSON.parse(localStorage.getItem("user"));

const validSuccessElement = document.getElementById("validSuccess");
const form = document.getElementById("form");
const validEmailElement = document.getElementById("validEmail");
const validPasswordElement = document.getElementById("validPass");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (user) {
    validEmail(emailElement.value);
    validPassword(passwordElement.value);
    if (
      validEmail(emailElement.value) &&
      validPassword(passwordElement.value)
    ) {
      validSuccessElement.innerText = "Đăng nhập thành công!";
      // Gửi dữ liệu đi serve
    }
  }
});

const validEmail = (email) => {
  if (email !== user.email) {
    validEmailElement.innerText = "Tài khoản không đúng!";
    return false;
  } else {
    validEmailElement.innerText = "";
    return true;
  }
};

const validPassword = (pass) => {
  if (pass !== user.password) {
    validPasswordElement.innerText = "Mật khẩu không đúng!";
    return false;
  } else {
    validPasswordElement.innerText = "";
    return true;
  }
};
