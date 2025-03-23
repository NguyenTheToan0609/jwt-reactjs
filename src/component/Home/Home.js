import React from "react";
import "./Home.scss";

const Home = (props) => {
  return (
    <div className="container">
      <div>
        <h1>Giới thiệu khóa học Fullstack</h1>

        <h2>1. Thư viện React.JS</h2>
        <p>
          Công cụ siêu mạnh mẽ, giúp xây dựng giao diện website tương tự
          Facebook, Instagram...
        </p>

        <h2>2. Framework Express &amp; Platform Node.JS</h2>
        <p>
          Với Node.JS, việc viết server bằng ngôn ngữ Javascript là điều hoàn
          toàn có thể. Bằng việc sử dụng framework Express trên nền tảng
          Node.JS, chúng ta sẽ cùng nhau viết server Node.JS theo chuẩn RESTful
          APIs, phục vụ cho giao diện frontend React.
        </p>

        <h2>3. Hiểu cách Tư Duy &amp; Tự Design được database SQL</h2>
        <p>
          Cơ sở dữ liệu quan hệ MySQL, đã quá phổ biến, cũng như quen thuộc với
          chúng ta. Tuy nhiên, việc thiết kế cơ sở dữ liệu như thế nào, làm sao
          để sử dụng nó một cách hiệu quả (thông qua ORM - object relational
          mapping) thì chúng ta sẽ cùng nhau tìm hiểu trong khóa học nhé.
        </p>

        <h2>4. Thiết Kế giao diện website Responsive</h2>
        <p>
          Một Fullstack Developer không chỉ biết "code cho chạy được", chúng ta
          sẽ làm đúng nghĩa của một người biết cả "frontend lẫn backend". Vì
          vậy, việc design một giao diện website trông "tốt" và tự động "co
          giãn" trên nhiều thiết bị là điều cực kỳ cần thiết. Với công cụ
          Bootstrap 5 (mới nhất hiện tại), việc kiểm soát, sở hữu một giao diện
          responsive với React chưa từng dễ đến vậy.
        </p>

        <h2>Kết thúc khóa học</h2>
        <p>
          Khi kết thúc khóa học này, các bạn có thể tự tin vào bản thân mình,
          chúng ta có thể làm được một Fullstack Developer một cách đúng nghĩa.
          Và điều quan trọng, các bạn sẽ học được cách đứng trên đôi chân của
          chính bản thân mình, học "cách tự bơi" trên hành trình trở thành một
          Developer thực thụ.
        </p>
      </div>

      <span className="title">Demo sản phẩm khi đạt dược : </span>
      <div className="video mt-3">
        <iframe
          width="1300"
          height="600"
          src="https://www.youtube.com/embed/W4Swti-ZdPA?list=PLncHg6Kn2JT7vOvooGw-yXcj6MHKrOpTZ"
          title="#12.8 Fix Bugs - Làm Mịn Giao Diện và Các Bugs Tồn Đọng | SERIES FULLSTACK - JWT, Node.JS &amp; React"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
