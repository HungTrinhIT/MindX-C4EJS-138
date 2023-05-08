const courseData = [
  {
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Foundation",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 1000,
  },
  {
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Beginner",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 1000,
  },
  {
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Intensive",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 1000,
  },
  {
    courseImage: "./assets/images/course-01.jpeg",
    title: "UI/UX Advanced",
    description: "Khoá học cung cấp kiến thức nền tảng về UI/UX",
    price: 1000,
  },
];

const initCourseElement = () => {
  const courseListElement = document.querySelector("#courses .courses");
  let listCourse = "";

  for (let i = 0; i < courseData.length; i++) {
    const course = courseData[i];
    const { title, courseImage, price, description } = course;
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
          </div>
        </div>
    `;
  }
  courseListElement.innerHTML = listCourse;
};
initCourseElement();
