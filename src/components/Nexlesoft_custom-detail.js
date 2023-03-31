/* eslint-disable react/style-prop-object */
import React from "react";

const Nexlesoftcustomdetail = () => {
  return (
    <div>
      <h2 className="nexlesoft_custom">10 Nexlesoft custom</h2>
      <h3>10.1 Frontend + Backend + Mobile</h3>
      <h4 className="react-structure">
        10.1.1 Structure folder name and file name
      </h4>
      <p>
        Name of folder is kebab:<code>name-of-folder-is-kebab</code>
      </p>
      <p>
        Name of folder is kebab:<code>name-of-folder-is-kebab</code>
      </p>
      <p>
        Name of file is kebab:<code>name-of-folder-is-kebab</code>
      </p>
      <h5 id="appendices-legacy-exceptions-forward-declare">
        10.1.1.1 <code>Constants</code>
      </h5>
      <p>
        Prefer to use <code>constants for all values can change</code>
      </p>
      <h3 >10.2 Redmine/Jira</h3>
      <h4 >10.2.1 Overview</h4>
      <h5 id="appendices-legacy-exceptions-forward-declare">
        11.1.1.1 <code>Create Issues</code>
      </h5>
      <p className="tracker">
        Tracker:<code>Task/Bug/Support</code>
      </p>
      <p className="subject">
        Subject:<code>[EPIC NAME] [STORY NAME] [TASK NAME]: NAME OF ISSUE</code>
      </p>
      <p>
        [EPIC NAME]<code>[BA, UI/UX, FRONTED, BACKEND, IOT, MOBILE, QC]</code>
        for PM
      </p>
      <p>
        [STORY NAME]<code> Các Features/Modules của dự án</code>for PM/BA
      </p>
      <p>
        [TASK NAME, BUG]<code> Task/Bug/Support của dự án</code>for all
      </p>
      <p>
        [BUG]
        <code>
          Khi tạo Bug nếu biết member nào có thể xử lý được thì assigned, nếu
          không thì để trống. Khi tạo Bug thì clear Start date, Due date, %
          Done, các phần này để cho developer update
        </code>
        <p>
          [SUPPORT]
          <code>
            {" "}
            Tạo task vào redmine
            https://redmine.nexlesoft.com/projects/nexle-training-and-support/
          </code>
          for all
        </p>
      </p>
      <p className="description">
        Description:<code></code>
      </p>
      <p>
        <code>*Require clear:* </code>
      </p>
      <p>
        Yêu cầu phải mô tả thật chi tiết task cần thực hiện<code></code>
      </p>
      <br></br>
      <p>
        <code>*Expected results:* </code>
      </p>
      <p>
        Yêu cầu phải mô tả thật chi tiết kết quả task cần thực hiện<code></code>
      </p>
      <br></br>
      <p>
        <code>*Suggest detail:* </code>
      </p>
      <p>
        Đưa ra một số giải pháp để thực hiện (nếu có)<code></code>
      </p>
      <br></br>
      <p>
        Parent task:
        <code>
          {" "}
          Bắt buộc phải có Story/Task liên quan (Ngoại trừ trường hợp task là
          Support)
        </code>
      </p>
      <p>
        Start date:
        <code>
          Ngày dự kiến bắt đầu thực hiện task (nhập 1 lần và không cho edit lại)
        </code>
      </p>
      <p>
        Due date:
        <code>
          Ngày dự kiến hoàn thành task (nhập 1 lần và không cho edit lại)
        </code>
      </p>
      <p>
        Estimated time:<code>Thời gian dự kiến hoàn thành task (h)</code>
      </p>
      <p>
        Spent time:
        <code>
          Thời gian thực tế hoàn thành task (h), khi update nhiều lần thì sẽ
          cộng dồn giữa các lần với nhau
        </code>
      </p>
      <p>
        % Done:<code>Phần trăm thực tế hoàn thành dự án</code>
      </p>
      <p>
        Target version:<code>Version hiện tại của task</code>
      </p>
      <p className="files">
        Files:<code>Hình ảnh, tài liệu liên quan đến task </code>
      </p>
      <p className="assignee">
        Assignee:<code>Người thực hiện task</code>
      </p>
      <p className="category">
        Category:
        <code>Mỗi tuần 1 sprint có cấu trúc [SPRINT] [TUẦN] FROM TO</code>
      </p>
      <p className="subtasks">
        Subtasks:<code>Danh sách các subtask nếu có</code>
      </p>
      <p>
        Related issues:
        <code>
          Task khác có liên quan đến task hiện tại thường là BE + FE hoặc BE +
          MOBILE hoặc BE + BE
        </code>
      </p>
      <p>
        Rule tạo Tracker:<code></code>
      </p>
      <ul>
        <li>
          Một dự án có thể có các EPIC : DOCUMENTS, BA, UI/UX, FRONTEND,
          BACKEND, IOT, QC, OTHERS
        </li>
        <li>Mỗi một EPIC chỉ chứa danh sách các STORY</li>
        <li>Mỗi STORY chỉ có TASK, BUG và không chứa STORY khác</li>

        <li>
          Mỗi TASK/BUG/SUPPORT đơn phải có thời gian Estimated time không quá
          8h, nếu lớn hơn phải phân thành nhiều Subtask/Sub bug
        </li>
        <li>
          Mỗi TASK/BUG có thể có nhiều Subtask/Sub bug nhưng không phân quá 3
          cấp
        </li>
        <li>Mỗi BUG phải nằm trong STORY (Không được ở bên trong TASK)</li>
        <li>
          Mỗi BUG có thể có Sub Bug (dành cho trường hợp Fix bug này gây lỗi chỗ
          khác hoặc cần phải xử lý nhiều bug nhỏ)
        </li>
      </ul>
      <p>
        Rule chọn Status:<code></code>
      </p>
      <ul>
        <li>
          New/To Do: dùng cho TASK/BUG/SUPPORT mới được tạo (có thể chọn member
          Assigned hoặc không)
        </li>
        <li>
          Assigned: dùng cho TASK/BUG/SUPPORT có 1 hoặc nhiều Sub có trạng thái
          khác [Coding Done, CLose, Resolved, No Fix Planned], Ngược lại update
          [Coding Done]
        </li>
        <li>In Progress: dùng cho TASK/BUG/SUPPORT khi đang thực hiện task</li>
        <li>
          Coding Done: chỉ dùng cho TASK khi hoàn thành, khi đó yêu cầu % Done =
          100% và phải có comment xác nhận với nội dung là "Task đã hoàn thành
          nhờ @PM review"{" "}
        </li>

        <li>
          Resolved: dùng cho BUG/SUPPORT khi đã hoàn thành, khi đó yêu cầu %
          Done = 100% và phải có comment xác nhận với nội dung là "Task đã hoàn
          thành và được build trên môi trường DEV/UAT nhờ @PM review"
        </li>
        <li>
          Verification Failed: dùng cho BUG/SUPPORT khi không thể hoàn thành vì
          bất kỳ lí do nào
        </li>
        <li>
          No Fix Planned: dùng cho BUG/SUPPORT khi không khảo khác thấy không
          cần thiết phải thực hiện, khi đó yêu cầu % Done = 100%
        </li>

        <li>
          Close: dùng cho TASK/BUG/SUPPORT sau khi đã xác nhận Coding
          Done/Resolved/No Fix Planned, khi đó yêu cầu % Done = 100%
        </li>
      </ul>
      <p>
        Rule chọn Priority:<code></code>
      </p>
      <ul>
        <li>
          Low: dùng cho TASK/BUG/SUPPORT có độ ưu tiên thấp hơn trạng thái
          Normal
        </li>
        <li>Normal: Trạng thái bình thường khi tạo TASK/BUG/SUPPORT</li>
        <li>
          High: dùng cho TASK/BUG/SUPPORT có độ ưu tiên hơn ở trạng thái Normal
        </li>
        <li>
          Urgent: dùng cho BUG/SUPPORT nếu gây lỗi đến chức năng khác hoặc
          support team
        </li>
        <li>Immediate: chỉ áp dụng các trường hợp đặc biệt do PM yêu cầu</li>
      </ul>
      <p>
        Tham khảo tổng quan 1 EPIC và các thành phần tại:
        <code>
          <a href="https://redmine.nexlesoft.com/issues/61938">
            https://redmine.nexlesoft.com/issues/61938
          </a>
          /code&gt;
        </code>
      </p>
      <h5 className="appendices-legacy-exceptions-forward-declare">
        11.1.1.2 <code>Create PDF for weekly report</code>
      </h5>
      <p className="to">
        TO:<code>datpp@nexlesoft.com</code>
      </p>
      <p className="cc">
        CC:<code>haibs@nexlesoft.com</code>
      </p>
      <p className="subject">
        Subject:<code>[Weekly Report] From dd/mm/yyyy To dd/mm/yyyy</code>
      </p>
      <p className="content">
        Content:<code></code>
      </p>
      <p>
        Dear Anh/Chị/Em Đạt,<code></code>
      </p>
      <p>
        Anh/Chị/Em Nguyễn Văn A gửi weekly report tuần thứ X tháng Y
        <code></code>
      </p>
      <p>
        Export pdf Issues trong tuần.<code></code>
      </p>
      <p>
        Trân trọng.<code></code>
      </p>
      <p>Họ và tên | Vị trí | Nexle Corporation</p>
      <p className="address">
        Address: 3rd Floor GMG Building, 539-545 Ly Thuong Kiet St., Ward 8, Tan
        Binh Dist. | Ho Chi Minh | Vietnam
      </p>
      <p className="branch">
        Branch: 4th Floor Gemadept Building, 39-41 Quang Trung St., Hai Chau
        Dist. | Da Nang | Vietnam
      </p>
      <p>Phone/Skype/Zalo: xxxx xxxxxx</p>
      <p>email</p>
      <p className="http">http://www.nexlesoft.com</p>
      <h3 className="react">10.3 Source control</h3>
      <h4 className="react-overview">10.3.1 Overview</h4>
      <h5 className="appendices-legacy-exceptions-forward-declare">
        10.3.1.1 <code>Branch</code>
      </h5>
      <p>
        Prefer to create new branch{" "}
        <code>
          {" "}
          [EPIC_className]/[USER_STORY_className]/[user_name]/[TASK_className]/[TASK_NAME]_[option_description]
        </code>{" "}
        example{" "}
        <code>66287/65700/datpp/66287/make_ui_with_dark_mode_for_all_chat</code>
      </p>
      <code>Note: You must convert your utf8 to no accent vietnamese</code>
      <code>
        example datpp/56351_triển khai microservice tài liệu, văn bản =&gt;
      </code>
      <code>66287/65700/datpp/66287/make_ui_with_dark_mode_for_all_chat</code>
      <h3 className="postman">10.4 Postman</h3>
      <h4 className="postman-account"> 10.4.1 Postman account</h4>
      <p className="postman-account">
        User account sharing for team in projects
      </p>
      <h5 className="postman-account">
        10.4.2 <code>Account Hồ chí Minh</code>
      </h5>
      <br></br>
      <p className="postman-account">
        "Username"<code>nexleteam</code>" Password"<code>Zxc123456</code>
      </p>
      <h5 className="postman-account">
        10.4.3 <code>Account Đà Nẵng</code>
      </h5>
      <p className="postman-account">
        Username<code>nexlegroup</code> Password <code> Zxc123456</code>{" "}
      </p>
      <h3 className="postman">10.5 Gmail for developer</h3>
      <h4 className="gmail-account">10.5.1 Development mail account</h4>
      <p className="postman-account">
        User account sharing for team in projects
      </p>
      <h5 className="postman-account">
        10.5.2 <code>Development Nexlesoft</code>
      </h5>
      <br></br>
      <p className="postman-account">
        "Username"<code>development.nexlesoft@gmail.com</code>" Password"
      </p>
      <code>NexleTeaM2022</code>
      <h5 className="postman-account">
        10.5.3 <code>Development Nexlesoft</code>
      </h5>
      <br></br>
      <p className="postman-account">
        "Username"<code>nexlesoft.hcm@gmail.com</code>" Password"
      </p>
      <code>NexleTeaM2022</code>
      <h5 className="postman-account">
        10.5.4 <code>Development Nexlesoft</code>
      </h5>
      <br></br>
      <p className="postman-account">
        "Username"<code>nexlesoft.danang@gmail.com</code>"Password"
      </p>
      <code>NexleTeaM2022</code>
      <h5 className="postman-account">
        10.5.5 <code>Development Nexlesoft</code>
      </h5>
      <br></br>
      <p className="postman-account">
        "Username"<code>test@nexlesoft.com</code> Password T98Ek@293k98 Server:
        mail.nexlesoft.com
      </p>
      <pre className="language-js prettyprint badcode prettyprinted">
        <span className="pln"></span>
        <p>
          <span className="typ" >
            Important
          </span>
        </p>
        <h4>
          <span className="typ">
            All
          </span>
          <span className="pln" >
            {" "}
            developer must pull task and write comment summary on redmine
          </span>
          <span className="pun">/</span>
          <span className="typ" >
            Jira
          </span>
          <span className="pln">
            {" "}
            assigned to team leader before create pull request
          </span>
          <span className="pun">.</span>
          <span className="typ">
            Team
          </span>
          <span className="pln">
            {" "}
            leader assigned task to BA after deploy
          </span>
          <span className="pun">.</span>
        </h4>
        <span className="pln"></span>
      </pre>
      <div style={{ float: "right", padding: "25px", color: "#009900" }}>
        @by Phan Phương Đạt 2021  
      </div>
    </div>
  );
};

export default Nexlesoftcustomdetail;
