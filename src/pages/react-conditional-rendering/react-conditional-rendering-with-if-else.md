## React conditional rendering with if else


- Muốn hiển thị văn bản dưới dạng phản hồi cho người dùng của mình biết khi danh sách trống để có trải nghiệm người dùng tốt hơn.
- Điều này hoạt động với 1 câu lệnh if khách, nhưng thay vào đó, tôi sẽ mở rộng ví dụ bằng một câu lệnh if else.
```jsx
const users = [
  { id: '1', firstName: 'Robin', lastName: 'Wieruch' },
  { id: '2', firstName: 'Dennis', lastName: 'Wieruch' },
];

function App() {
  return (
    <div>
      <h1>Hello Conditional Rendering</h1>
      <List list={users} />
    </div>
  );
}
function List({ list }) {
    if (!list) {
        return null;
    }

    if (!list.length) {
        return <p>Sorry, the list is empty.</p>;
    } else {
        return (
            <div>
                {list.map(item => (
                    <Item item={item} />
                ))}
            </div>
        );
    }
}
```

- Mặc dù ví dụ trên, chỉ cho bạn cách sử dụng if else trong React, nhưng tôi khuyên bạn nên sử dụng các câu lệnh if đơn lẻ mỗi khi bạn muốn bảo vệ component chính (ở đây là return về danh sách) như một phương pháp hay nhất.
```jsx
function List({ list }) {
    if (!list) {
        return null;
    }

    if (!list.length) {
        return <p>Sorry, the list is empty.</p>;
    }

    return (
        <div>
            {list.map(item => (
                <Item item={item}/>
            ))}
        </div>
    )
}
```
- Đây là cách dễ đọc hơn so với kết cấu có điều kiện if else ở trên.