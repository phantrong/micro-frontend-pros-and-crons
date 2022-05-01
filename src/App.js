import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

function App(props) {
  return (
    <Router history={props.history || defaultHistory}>
    <div className="content-page">
      <h1>Ưu điểm và Nhược điểm</h1>
      <h2>Ưu điểm</h2>
      <p>Thay vì xác định tiền đề vi mô về các phương pháp tiếp cận kỹ thuật cụ thể hoặc chi tiết triển khai, thay vào đó, chúng tôi tập trung vào các thuộc tính nổi lên và lợi ích mà chúng mang lại.</p>
      <h2>Nhược điểm</h2>
      <p>Ở phần đầu của bài viết này, chúng tôi đã đề cập rằng có sự cân bằng với các giao diện người dùng vi mô, cũng như với bất kỳ kiến ​​trúc nào. Những lợi ích mà chúng tôi đã đề cập đi kèm với chi phí, mà chúng tôi sẽ đề cập ở đây.</p>
    </div>
    </Router>
  );
}

export default App;
