import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch , NavLink, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import './App.css';

function Home() {
  const taKhanhLyImage = "https://i.ibb.co/sJVcqLH/393175621-369017442160467-3671015785044275022-n.jpg";
  // const vuongQuynhImage = "https://i.ibb.co/HYngRvJ/IMG-9691.jpg"
  const vuongQuynhImage = "https://i.ibb.co/Cw4cfCH/IMG-9686-2.jpg"
  const namAnhImage = "https://i.ibb.co/wpsnt46/128739287-2450298285275144-2436440151988783825-n.jpg"
  return (
    <section id="result">
    <h2>Parallel Smith-Waterman Algorithm Project</h2>
    <p>
        Dự án song song hoá thuật toán Smith-Waterman và áp dụng kết quả vào giải quyết bài toán so sánh chuỗi gen xác định đặc trưng gen.
    </p>
    <p><strong>Thực hiện:</strong></p>
    <div class="team-section">
        <div class="team-member">
          <div className="rounded-image-container">
            
            <img
              src={taKhanhLyImage}
              alt="Ta Khanh Ly"
              className="rounded-image"
            />
          
          </div>
          Tạ Khánh Ly
        </div>
        <div class="team-member">
          <div className="rounded-image-container">
            
            <img
              src={namAnhImage}
              alt="Nam Anh"
              className="rounded-image"
            />
          
          </div>
          Nguyễn Nam Anh</div>
        <div class="team-member">Nguyễn Khánh Huyền</div>
        <div class="team-member">
            <div className="rounded-image-container">
              
              <img
                src={vuongQuynhImage}
                alt="Vuong Thi Diem Quynh"
                className="rounded-image"
              />
            
            </div>
            Vương Thị Diễm Quỳnh
          {/* <div className="rounded-image-container">
          
              <img
                src={vuongQuynhImage}
                alt="Vuong Thi Diem Quynh"
                className="rounded-image"
              />
            
          </div> */}
        </div>
    </div>
    <p><strong>Giáo viên hướng dẫn:</strong> TS.Trần Hà Nguyên</p>

    <h2>Project Resources</h2>
        <p><strong>Report:</strong> <a href="link_to_your_report.pdf" target="_blank">Read the Report</a></p>
        <p><strong>Source Code:</strong> <a href="link_to_your_github_repository" target="_blank">GitHub Repository</a></p>
        <p><strong>Installation and Run Instructions:</strong></p>
        <ol>
            <li>Clone the GitHub repository: <code>git clone https://github.com/your-username/your-repository.git</code></li>
            <li>Navigate to the project directory: <code>cd your-repository</code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Run the code: <code>npm start</code></li>
        </ol>
    
    <h2>Application</h2>
        <p><strong>Try it out:</strong> <a href="/app" target="_self">Here</a></p>

    
</section>

  );
}

function Algorithm() {
  const algorithmGif = "https://upload.wikimedia.org/wikipedia/commons/9/92/Smith-Waterman-Algorithm-Example-En.gif"

  return (
    <div id="result" className="algorithm-container">
      <section>
        <h2>Smith-Waterman Algorithm Overview</h2>
        <p>
          Thuật toán Smith-Waterman là một thuật toán quan trọng trong lĩnh vực so sánh chuỗi DNA hoặc protein. Nó được sử dụng để tìm ra sự tương đồng giữa các đoạn con của hai chuỗi, giúp phát hiện các đoạn con tương đồng không liên tục. Đây là một thuật toán động lực, có khả năng xử lý các sự thay đổi nhỏ giữa chuỗi.
        </p>
        <div>
          <img src={algorithmGif} alt="Algorithm" className="algorithm-gif" />
        </div>
        <p><strong>Dưới đây là mô tả cơ bản về thuật toán Smith-Waterman:</strong></p>
        <ol>
          <li>Tạo ma trận điểm: Bắt đầu bằng việc tạo một ma trận điểm, trong đó mỗi phần tử (i, j) biểu diễn sự tương đồng giữa phần tử thứ i của chuỗi 1 và phần tử thứ j của chuỗi 2.</li>
          <li>Khởi tạo ma trận điểm và điểm tối đa: Khởi tạo ma trận điểm sao cho cả hai giới hạn (biên) của ma trận đều bằng 0. Khởi tạo một biến để theo dõi điểm tối đa và vị trí của nó trong ma trận.</li>
          <li>Lấp đầy ma trận điểm: Bắt đầu từ phần tử (1,1) của ma trận, tính toán giá trị cho mỗi phần tử bằng cách sử dụng quy tắc đệ quy.</li>
          <li>Theo dõi điểm tối đa: Trong quá trình tính toán, theo dõi giá trị tối đa và vị trí của nó. Điều này giúp xác định đoạn con tương đồng tốt nhất giữa hai chuỗi.</li>
          <li>Quay ngược để xác định đoạn con: Bắt đầu từ vị trí của điểm tối đa, quay ngược để xác định đoạn con tương đồng bằng cách theo dõi các giá trị có ảnh hưởng đến điểm tối đa.</li>
        </ol>
        <p>
          Thuật toán Smith-Waterman có khả năng xử lý sự dịch chuyển và chèn/xóa (insertion/deletion) giữa các chuỗi. Do đó, nó thường được sử dụng trong các ứng dụng như tìm kiếm gen trong chuỗi genôm, so sánh protein, hay tìm kiếm đoạn con tương đồng trong dữ liệu sinh học.
        </p>
      </section>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h1>Nhóm 2:</h1>
      <p>Dương Ngọc Thái</p>
      <p>Mai Bá Đức</p>
      <p>Hoàng Xuân Quý</p>
      <p>Nguyễn Ngọc Anh</p>
    </div>
  );
}

function Smith() {
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const executeCode = () => {
    if (!selectedFile) {
      setError('Please select a file');
      setOutput('');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('/execute-c', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setOutput('');
        } else {
          setError('');
          setOutput(data.output);
        }
      })
      .catch((error) => {
        setError('An error occurred');
        console.error(error);
      });
  };

  return (
    <div id="result">
      

      <section>
      <h1>Ứng dụng</h1>
      <div>Xác định đặc trưng gen của Chuỗi gen sử dụng thuật toán Smith-Waterman được song song hóa.
      </div>
      <div>Quá trình giải quyết bài toán bắt đầu bằng việc so sánh chuỗi gen đầu vào với các chuỗi gen trong cơ sở dữ liệu. Thuật toán Smith-Waterman được áp dụng để tìm ra điểm số tương đồng giữa các cặp chuỗi gen, giúp xác định vị trí và mức độ tương đồng cụ thể.      

      </div>
      <div>
      Mỗi điểm tương đồng được ghi lại, và sau đó, chuỗi gen nào có điểm tương đồng cao nhất sẽ được chọn làm đặc trưng dự đoán cho mẫu đầu vào. Quá trình này không chỉ giúp xác định đặc trưng gen một cách chính xác mà còn mở ra khả năng tìm kiếm trong cơ sở dữ liệu lớn.
      </div>
      <table>
        <tr>
            <th>STT</th>
            <th>Đặc trưng gen</th>
            <th>Nhãn</th>
        </tr>
        <tr>
            <td >1</td>
            <td>Mắt đen</td>
            <td>4</td>
        </tr>
        <tr>
            <td >1</td>
            <td>Mắt đen</td>
            <td>4</td>
        </tr>
        <tr>
            <td >1</td>
            <td>Mắt đen</td>
            <td>4</td>
        </tr>
        <tr>
            <td >1</td>
            <td>Mắt đen</td>
            <td>4</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Lông vàng</td>
            <td>6</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bạch tạng</td>
            <td>5</td>
        </tr>
    </table>
    
    <div class="steps">
      Các bước thực hiện:
      <br/>
      Bước 1: Click vào <code>Choose File</code> để tải lên file chứ chuỗi gen muốn so sánh.<br/>
Bước 2: Sau khi hoàn tất tải lên file, click vào <code>Run</code>.<br/>
Bước 3: So sánh kết quả với bảng mô tả ở phía trên để xác định gen đặc trưng tương đồng nhất với chuỗi gen đầu vào.<br/>
      </div>

        <h2>Thực hiện</h2>
        <div class="output">
          <input type="file" onChange={handleFileChange} />
          <button onClick={executeCode}>Run</button>
        </div>
        <div class="output">
          <h3>Kết quả dự đoán:</h3>
          <pre>{output}</pre>
        </div>
        {/* <div class="output">
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div> */}

        
      </section>
    </div>
  );
}

function App() {
  return (
    <div class="App">
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/algorithm" element={<Algorithm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/app" element={<Smith/>} />

      </Routes>
    </div>
  );
}

export default App;



