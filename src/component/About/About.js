import React from "react";

function About(props) {
  return (
    <div className="container">
      <h2>Hi there. ~~</h2>
      <section id="about">
        <p>
          Mình tên là Toàn, cựu sinh viên CNTT trường đại học Kinh tế kỹ thuật
          hà nội,
        </p>
        <p>
          Trước khi đầu quân cho ngân hàng, thì mình cũng có thời gian gần 2 năm
          làm việc cho công ty chứng khoán, và công việc chủ yếu của mình làm
          việc với React và Node.JS.
        </p>
        <p>
          Dù đi đến đâu, làm việc ở công ty nào, thì mình cũng là fullstack
          developer, và luôn sử dụng React ở Frontend ^^ (backend có thể là
          Java, PHP hoặc Javascript).
        </p>
        <hr />
        <section id="skills">
          <h2>Tech Skills:</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> React.JS, Angular và Vue.
            </li>
            <li>
              <strong>Backend:</strong> Javascript với Node.js, Laravel và
              Spring Boot.
            </li>
          </ul>
          <p>Ngoài ra còn nhiều skills hơn nữa ^^</p>
        </section>

        <section id="learning">
          <p>
            Các bạn sẽ học được từ mình, những cái mà mình "tự học" từ thời sinh
            viên cho tới khi đi làm.
          </p>
          <p>
            Tin mình đi, 10 chấm bách khoa Hà Nội là vậy, lấy được bằng Kỹ sư
            Bách Khoa không dễ. Và nơi đây, học thật và thi thật ^^
          </p>
        </section>
        <section id="course-content">
          <h2>Các kiến thức có trong khóa học này</h2>
          <h3>React:</h3>
          <ul>
            <li>
              ✅ Phân trang khi hiển thị List (Pagination): demo chức năng User
            </li>
            <li>✅ Clone Element: demo chức năng Thêm nhiều Roles một lúc</li>
            <li>✅ Sử dụng Ref để từ Parent gọi Child Functions</li>
            <li>✅ Sử dụng React Context API</li>
            <li>✅ React Private Routes: check quyền người dùng ở Frontend</li>
            <li>✅ Customize Axios: Tối ưu hóa việc call RESTful APIs</li>
            <li>✅ Kết hợp React và Bootstrap 5 tạo giao diện Responsive</li>
          </ul>
          <h3>Node.JS:</h3>
          <ul>
            <li>✅ Sử dụng JWT: JSON web token</li>
            <li>
              ✅ Middleware check người dùng đã đăng nhập? check quyền hạn người
              dùng?
            </li>
            <li>
              ✅ Sử dụng Cookies và Bearer Token Header để định danh người dùng
            </li>
          </ul>
          <h3>Database SQL:</h3>
          <ul>
            <li>
              ✅ Học & Hiểu các bước phân tích khi có yêu cầu của project
              (requirements)
            </li>
            <li>
              ✅ Cách thiết kế database cho dự án cần phân quyền người dùng
            </li>
          </ul>
        </section>
        <p>&copy; 2025 Toan - Fullstack Developer. All rights reserved.</p>
      </section>
    </div>
  );
}

export default About;
