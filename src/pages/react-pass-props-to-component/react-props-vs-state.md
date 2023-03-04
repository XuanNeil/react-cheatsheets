##React props vs state

- Việc truyền `props` từ `component` này sang `component` khác trong React không làm cho `component` trở nên tương tác, bởi vì `props` ở dạng chỉ đọc và do đó không thể thay đổi.
- Nếu muốn các thành phần React tương tác, bạn phải có các giá trị trạng thái bằng cách sử dụng `React State`.
- Thông thường, `state` được đặt cùng vị trí với 1 `component` React bằng cách sử dụng `useState` Hook của React.

```jsx
const App = () => {
    const greeting = 'Welcome to React';
    const [isShow, setIsShow] = useState(true);
    
    const handleToggle = () => {
        setIsShow(!isShow);
    }
    
    return (
        <div>
            <button onClick={handleToggle} type="button">
                Toggle
            </button>

            {isShow ? <Welcome text={greeting} /> : null}
        </div>
    )
}

const Welcome = ({ text }) => {
    return <h1>{text}</h1>;
};
```

- Tiếp theo, cho thấy cách `state` có thể trở thành `props` khi nó được truyền cho thành phần con.
- Mặc dù, `state` trở thành `props` trong thành phần con, nhưng nó vẫn có thể sửa đổi trong thành phần cha dưới dạng `state` thông qua chức năng cập nhật `state`.
- Sau khi sửa đổi, `state` được chuyển lại dưới dạng `modified props`.

```jsx
const App = () => {
    const [greeting, setGreeting] = useState('Welcom to React');
    const [isShow, setIsShow] = useState(true);
    
    const handleToggle = () => {
        setIsShow(!isShow);
    }
    
    const handleChange = (event) => {
        setGreeting(event.target.value);
    }
    
    return (
        <div>
            <button onClick={handleToggle}>
                Toggle
            </button>
            <input onChange={handleChange} value={greeting}/>
            {isShow ? <Welcome text={greeting} /> : null}
        </div>
    )
}
const Welcome = ({ text }) => {
    return <h1>{text}</h1>;
};

```
- Nói cách khác, người ta có thể nói rằng giá trị (state) trong phương tiện (props) đã bị thay đổi.
- Thành phần con không quan tâm liệu giá trị bên trong các `props` có phải là giá trị `state` hay không -- nó chỉ xem chúng là các `props` đến từ thành phần cha.
- Vì mọi thay đổi `state` trong một thành phần (ở đây là thành phần cha) gây ra re-render(kết cấu lại) của thành phần này và tất cả các thành phần con, nên cuối cùng thành phần con chỉ nhận được các `props` được cập nhật  cuối cùng.

==> Tóm lại: Mỗi khi `state` thay đổi, cơ chế hiển thị của component bị ảnh hưởng và tất cả các component con của nó sẽ được triggered (kích hoạt). Đó là cách toàn bộ cây thành phần trở nên tương tác, bởi vì xét cho cùng, các giá trị trạng thái (state) được truyền dưới dạng props cho các thành phần con và một khi state trong thành phần thay đổi, có thể được truyền dưới dạng `props` cho các thành phần con, tất cả sẽ re-rendering(kết cấu lại) các thành phần con sử dụng các `props` mới.

