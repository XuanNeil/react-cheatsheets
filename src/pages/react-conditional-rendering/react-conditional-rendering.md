## React conditional rendering

### Table of contents
- Conditional rendering in React: if
- Conditional rendering in React: if else
- Conditional rendering in React: ternary
- Conditional rendering in React: &&
- Conditional rendering in React: switch case
- Multiple Conditional rendering in React
- Nested Conditional rendering in React
- Conditional rendering with HOC
- If else components in React

<hr />

- `if`: 
    1. Kết xuất có điều kiện cơ bản nhất.
    2. Sử dụng để chọn không tham gia(opt-out) sớm từ kết xuất(guard pattern).
    3. Không thể sử dụng bên trong JSX và return statement(ngoại trừ fucntion tự gọi).

- `if-else`:
    1. Hiếm khi sử dụng, bởi nó dài dòng.
    2. Thay vào đó, hãy sử dụng ternary operator hoặc logical && operator.
    3. Không thể sử dụng bên trong câu lệnh trả về (return statement) và JSX (ngoại trừ function tự gọi).

- `ternary operator`:
    1. Sử dụng nó thay vì if else.
    2. Có thể sử dụng trong JSX và câu lệnh trả về (return statement).

- `logical && operator`:
    1. Sử dụng nó khi 1 component bên trong có return null.
    2. Nó có thể sử dụng bên trong JSX và return statement.
  
- `switch case`:
    1. Tránh sử dụng nó vì nó quá dài dòng.
    2. Thay vào đó, hãy sử dụng enums.
    3. Không thể sử dụng bên trong JSX và return statement(ngoại trừ function tự gọi).
  
- `enums`:
    1. Sử dụng nó để hiển thị có điều kiện dựa trên nhiều status.
    2. Hoản hảo để lập bản đồ nhiều hơn một điều kiện.

- `nested conditional rendering`:
    1. Tránh sử dụng vì khó đọc.
    2. Thay vào đó, hãy tách các component, sử dụng if hoặc HOC.

- `HOCs`:
    1. Các thành phần có thể tập trung vào mục đích của chúng.
    2. Sử dụng HOC để che chắc kết xuất có điều kiện.
    3. Sử dụng nhiều HOC có thể kết hợp để che chắc nhiều kết xuất có điều kiện.