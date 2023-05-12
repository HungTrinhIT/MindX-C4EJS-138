// Dữ liệu mẫu
const courseData = [
  {
    id: "1",
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Foundation",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 2000,
  },
  {
    id: "2",
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Beginner",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 1200,
  },
  {
    id: "3",
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Intensive",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 3000,
  },
  {
    id: "4",
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Advanced",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 4500,
  },
  {
    id: "5",
    courseImage: "./assets/images/course-01.jpeg",
    title: "ReactJS",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 4500,
  },
  {
    id: "6",

    courseImage: "./assets/images/course-01.jpeg",
    title: "Frontend Master",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 4500,
  },
  {
    id: "7",
    courseImage: "./assets/images/course-01.jpeg",
    title: "Fullstack Developer",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 4500,
  },
];

// Xử lý về load dữ liệu giỏ hàng từ localstorage
let cart = [];

const loadCartInformation = () => {
  const cartInString = localStorage.getItem("cart");
  cart = JSON.parse(cartInString) || [];
};
loadCartInformation();

const saveCartToLocalStorage = (cart) => {
  // Vì localstorage chỉ lưu kiểu dữ liệu dạng string
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Xử lý thêm sản phẩm vào giỏ hàng
function onAddProductToCart(id) {
  // Step 1: Tìm sản phẩm vừa được click trong list sản phẩm ban đầu
  const selectedCourse = courseData.find((course) => Number(course.id) === id);

  // Step 2: Kiểm tra sản phảm tồn tại trong giỏ hàng hay chưa
  const courseInCartIndex = cart.findIndex(
    (cartItem) => Number(cartItem.id) === id
  );

  //  Sản phẩm cần thêm đã tồn tại trong giỏ hàng
  if (courseInCartIndex !== -1) {
    cart[courseInCartIndex].quantity += 1;
  } else {
    // Lần đầu tiên thêm vào giỏ hàng => số lượng mua là 1
    selectedCourse.quantity = 1;
    cart.push(selectedCourse);
  }

  saveCartToLocalStorage(cart);
}

// Render UI
const renderCourseElement = () => {
  const courseListElement = document.querySelector("#courses .courses");
  let listCourse = "";

  for (let i = 0; i < courseData.length; i++) {
    const course = courseData[i];
    const { title, courseImage, price, id, description } = course;
    listCourse += `
        <div class="course-item">
          <img
            src="${courseImage}"
            alt="course"
            class="course-image"
          />
          <div class="course-info">
            <h5>${title}</h5>
            <p>
             ${description}
            </p>
            <div style="display:flex; justify-content:space-between;">
              <button class="add-course-btn" onclick="onAddProductToCart(${id})">Add to card</button>
              <span>${price}</span>
            </div>
          </div>
        </div>
    `;
  }
  courseListElement.innerHTML = listCourse;
};

renderCourseElement();


