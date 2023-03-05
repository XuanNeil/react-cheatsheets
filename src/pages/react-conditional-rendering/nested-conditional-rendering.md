## Nested conditional rendering in React

- Điều gì về kết xuất có điều kiện lồng nhau trong React? Nó có thể.
- Xem ví dụ dưới.
```jsx
function List({ list }) {
  const isNotAvailable = !list;
  const isEmpty = !list.length;

  return (
    <div>
      {isNotAvailable
        ? <p>Sorry, the list is not there.</p>
        : (isEmpty
          ? <p>Sorry, the list is empty.</p>
          : <div>{list.map(item => <Item item={item} />)}</div>
        )
      }
    </div>
  );
}
```
- Nó hoạt động, tuy nhiên, tôi khuyên bạn nên tránh các kết xuất có điều kiện lồng nhau vì chúng dài dòng khiến khó đọc.
- Thay vào đó hãy thử các giải pháp sau:
    1. Sử dụng câu lệnh if và return ra element hoặc component.
    2. Chia thành phần thành nhiều thành phần, trong mỗi thành phần đảm nhiệm việc hiển thị có điều kiện không lồng nhau.
