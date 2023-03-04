## How to pass props from child to parent component

- Vì các `props` chỉ có thể được truyền từ thành phần cha xuống thành phần con. Làm thế nào 1 thành phần con có thể giao tiếp với thành phần cha của nó?
- Đây là 1 câu hỏi phổ biến đối với những người mới bắt đầu sử dụng React khi họ tìm hiểu về props trong React và câu trả lời cho nó rất ngắn gọn: Không có cách nào để chuyển `props` từ một component con sang component cha.


```jsx
const App = () => {
  const [greeting, setGreeting] = useState('Welcome to React');

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  return (
    <div>
      <Button label="Toggle" />

      <input type="text" value={greeting} onChange={handleChange} />

      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Button = ({ label }) => {
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <button onClick={handleToggle} type="button">
      {label}
    </button>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};
```
- Trong ví dụ này, Button component mới quản lý trạng thái của chính nó.
- Vì Button component quản lý trạng thái của isShow  nên không có cách nào để chuyển trạng thái này dưới dạng `props` cho thành phần chính khi cần thiết cho kết cấu có điều kiện của Welcome component.
- Bởi vì, không có quyền truy cập vào giá trị isShow trong App component, ứng dụng sẽ lỗi.
- Để khắc phục điều này, bằng cách `lift state in React` 
```jsx
const App = () => {
  const [greeting, setGreeting] = React.useState('Welcome to React');
  const [isShow, setShow] = React.useState(true);

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <Button label="Toggle" onClick={handleToggle} />

      <input type="text" value={greeting} onChange={handleChange} />

      {isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};
const Button = ({label, onClick}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}
const Welcome = ({ text }) => {
    return <h1>{text}</h1>;
};
```

==> Như đã nói, không có cách nào chuyển `props` từ component con sang component cha. Nhưng bạn luôn có thể chuyển các hàm từ component cha sang component con, trong khi các thành phần con sử dụng các hàm này và các hàm có thể thay đổi `state` trong thành phần cha ở trên. Khi `state` đã thay đổi, `state` được truyền lại dưới dạng `props`. Tất cả các thành phần bị ảnh hưởng sẽ re-render(kết cấu lại).