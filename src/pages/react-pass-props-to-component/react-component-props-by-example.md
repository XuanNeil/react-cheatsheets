##React component props by example

- Thông thường, bạn bắt đầu với cú pháp `JSX` của React để hiển thị thứ gì đó cho trình duyệt khi tìm hiểu về React.
- Về cơ bản, `JSX` là kết hợp HTML và Javascript.

```jsx
// app.tsx
const App = () => {
    return (
        <div>
            <Welcome />
        </div>
    );
};

// wellcome.tsx
const Welcome = () => {
    return <h1>Welcome to React</h1>
}

```
- 1 câu hỏi thường gặp sau quá trình tái cấu trúc này: Làm cách nào để truyền dữ liệu từ 1 `component` này sang `component` khác?
- Bây giờ thành mới sẽ hiển thị `greeting` dynamic, không phải là 1 `greeting` static nữa.
- `Wellcome` component trên sẽ hoạt động là 1 function, nên có thể truyền `parameter`.

-> `props` - là nơi truyền dữ liệu từ `component` này sang `component` khác trong React.
```jsx
// app.tsx
const App = () => {
    return (
        <div>
            <Welcome greeting={"Welcome to React."}/>
        </div>
    );
};

// welcome.tsx
const Welcome = (props) => {
    
    return <h1>{props.greeting}</h1>
}
```

- Vì bạn luôn tìm thấy các `props` làm `argument` - đối số đầu tiên trong `function signature` của một `function component`.
- Vốn chỉ là object chứa tất cả dữ liệu được truyền từ `component` này sang `component` khác, nên có thể destructure các `props`.
- Người ta thường gọi là `React Props Destructuring`.

```jsx
const Welcome = ({greeting}) => {
    
    return <h1>{greeting}</h1>
}
```

- Như bạn đã thấy, `props` cho phép bạn chuyển các giá trị từ `component` này sang `component` khác trong `component tree`.
- Trong ví dụ trước, `props` chỉ là 1 `string`. Nhưng `props` có thể là bất kỳ `data type` nào từ `number`, `object`, `array`,...
- Thậm chí, có thể chuyển các `component`.


- Trong trường hợp là `string`, cũng có thể chuyển nó dưới dạng `props` bên trong dấu ngoặc kép hoặc ngoặc đơn.
```jsx
const App = () => {
    return (
     <div>
         <Welcome greeting="Welcome to React."/>
     </div>    
    )
}
```

- Nhưng đối với các `object` có thể gây nhầm lẫn, bởi vì có 2 dấu ngoặc nhọn. Một cho `JSX` và một cho ký hiệu `object`
```jsx
const App = () => {
  return (
    <div>
      <Welcome text={{ greeting: 'Welcome to React' }} />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text.greeting}</h1>;
};
```

- Hầu hết những người mới bắt đầu, sử dụng React đều nhận thấy điều này khi lần đầu tiên chuyển 1 object style sang thuộc tính style cho 1 phần tử HTML gốc trong React.
```jsx
const App = () => {
    return (
        <div>
            <Welcome text={{ greeting: 'Welcome to React' }} />
        </div>
    );
};

const Welcome = ({ text }) => {
    return <h1 style={{ color: 'red' }}>{text.greeting}</h1>;
};
```

- Cần lưu ý, `props` trong React chỉ được đọc (không thay đổi).

==> Rốt cuộc, `props` chỉ được sử dụng để truyền dữ liệu từ `parent` sang `child component` React. Về cơ bản `props` chỉ là phương tiện để truyền dữ liệu xuống `component tree`.
