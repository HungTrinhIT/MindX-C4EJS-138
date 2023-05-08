1. Tạo 1 form đăng ký bao gồm email, password, confirmPassword
2. Kiểm tra xem email đã tồn tại hay chưa? biết rằng trong cơ sở dữ liệu có các account sau: hoang@gmail.com; hoang12@gmail.com; hoangnm@gmail.com
   Nếu email đã tồn tại thì không cho đăng ký.
3. Kiểm tra password có ít nhất 1 ký tự viết hoa và có ít nhất 6 ký tự.
4. Kiểm tra confirmPassword === password.
5. Nếu tất cả điều kiện đã đúng, lưu thông tin đăng ký vào localStorage.
6. Tạo màn hình đăng nhập và đăng nhập bằng tài khoản đã đăng ký ở trên (yêu cầu: email, password is match)
