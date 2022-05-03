import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { createBrowserHistory } from 'history';

const defaultHistory = createBrowserHistory();

function App(props) {
  return (
    <Router history={props.history || defaultHistory}>
    <div className="content-page">
      <h2>Ưu điểm</h2>
      <h3>Các thành phần tách rời nhau, đơn giản hơn</h3>
      <p>Theo định nghĩa, mã nguồn cho từng micro frontend riêng lẻ sẽ nhỏ hơn nhiều so với mã nguồn của monolithic frontend. Mã nguồn nhỏ hơn nên có xu hướng đơn giản hơn và dễ làm việc hơn cho các nhà phát triển. Đặc biệt, tránh được sự phức tạp phát sinh từ việc ghép nối những phần ít hoặc không liên quan và không cần biết đến nhau.</p>
      <h3>Triển khai độc lập</h3>
      <p>Cũng giống như với microservices, micro frontend có khả năng triển khai độc lập.   và điều này làm giảm thiểu các rủi ro khi triển khai hệ thống. Mỗi micro frontend có quy trình xây dựng, test, và triển khai riêng. Ta sẽ hầu như không phải quan tâm tới micro frontend khác đang phát triển và triển khai ra sao vì chúng có thể hoạt động độc lập với nhau. Sẽ không có vấn đề gì nếu monolith frontend hoạt động ổn định, nhưng nếu một tính năng nào đó vô tình bị lỗi thì sẽ ảnh hưởng tới toàn bộ hệ thống, trong khi đó micro frontend có thể giải quyết được vấn đề này.</p>
      <h3>Mở rộng quy mô lên đến nhiều đội</h3>
      <p>Nhóm làm việc bao gồm các nhà phát triển có nền tảng và kỹ năng khác nhau. Một số là chuyên gia về React , Vue.js khác hoặc Angular . Một số thích viết mã bằng JavaScript , số khác thì viết bằng TypeScript. 
Nhờ đó, ta có thể chia nhóm ban đầu thành nhiều nhóm, nơi mọi người có thể thể hiện bản thân ở mức tốt nhất của họ. Điều này là do các nhóm khác nhau có thể đưa ra quyết định tốt nhất có thể về kiến ​​trúc, thử nghiệm và phong cách mã dựa trên logic nghiệp vụ mà họ phải giải quyết. Thêm vào đó, cách tiếp cận này vốn dẫn đến sự cô lập về mã và phong cách, khiến mỗi nhóm độc lập với những nhóm khác.
Trên thực tế, có nhiều nhóm nhỏ được tự do sử dụng các công nghệ mà họ thích có nghĩa là họ vốn ít bị hạn chế hơn và do đó có nhiều động lực hơn để viết mã chất lượng cao hơn.</p>
      <h3>Áp dụng được nhiều các công nghệ khác nhau</h3>
      <p>Vì micro frontend bao gồm các phần nhỏ độc lập, mỗi phần trong số chúng có thể được thực hiện bằng cách sử dụng các công nghệ khác nhau. Đây là một sức mạnh to lớn không thể tin được. Thứ nhất, bởi vì nhóm khởi đầu có thể được chia thành nhiều nhóm nhỏ dựa trên chuyên môn của một nhóm công nghệ cụ thể, điều này cũng tôn trọng nguyên tắc trách nhiệm duy nhất. Thứ hai, vì nhiều công nghệ sẽ được sử dụng trong cùng một dự án, nên việc thuê các nhà phát triển mới trở nên dễ dàng hơn.
Hơn nữa, phương pháp micro frontend hầu như loại bỏ hiện tượng khóa đối với một công nghệ cụ thể, hoặc ít nhất là nó giảm đáng kể. Điều này là do nhóm của bạn luôn có thể quyết định chọn một công nghệ mới mà không cần phải dịch những gì đã được phát triển trước đó. Thêm vào đó, mỗi đoạn mà kiến ​​trúc micro frontends bao gồm chắc chắn nhỏ hơn một khối frontend và việc chuyển nó thành một công nghệ mới sẽ mất ít thời gian hơn.
      </p>
      <h2>Nhược điểm</h2>
      <h3>Nguồn lực</h3>
      <p>Nếu một doanh nghiệp không có đủ quy mô hoặc nguồn lực cho các dự án micro frontend, thì  micro frontend thực sự có thể trở nên cồng kềnh so với việc chỉ sử dụng nguyên khối.</p>
      <h3>Sự phức tạp</h3>
      <p>Các nhà phát triển có thể sử dụng quá nhiều component trong dự án của họ theo thời gian, gây ra nhiều vấn đề ở giai đoạn triển khai và thử nghiệm. Điều này đòi hỏi một giai đoạn lập kế hoạch chi tiết và phức tạp để quyết định số lượng và mức độ chính xác của các bộ phận sẽ được sử dụng. Tương tự như vậy, mỗi nhóm nhà phát triển sẽ yêu cầu một bộ KPI chính xác để tuân theo. Tất cả điều này đòi hỏi quản lý nhiều việc hơn.</p>
      <h3>Thư viện dùng chung</h3>
      <p>Mỗi micro frontend được triển khai độc lập  và có thể có những thư viện dùng chung, điều này dẫn đến việc lãng phí bộ nhớ khi phải tải lặp đi lặp lại các thư viện giống nhau của mỗi micro frontend. Điều này cũng có thể gây bất lợi khi thời gian tải trang có thể lâu hơn</p>
    </div>
    </Router>
  );
}

export default App;
