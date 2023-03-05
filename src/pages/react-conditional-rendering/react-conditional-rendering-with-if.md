## Conditional rendering in react: if

- Logic kết cấu có điều kiện cơ bản nhất trong React được thực hiện với một câu lệnh `if` duy nhất.
- Hãy tưởng tượng bạn không muốn kết cấu thứ gì đó trong thành phần React của mình, vì nó không có props cần thiết.

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

  return (
    <ul>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      {item.firstName} {item.lastName}
    </li>
  );
}
```
- Hãy tự mình thử bằng cách đặt user thành null hoặc undefined. 
- Nếu thông tin từ props là null hoặc undefined, thành phần React sẽ trả về null thay vì `JSX` được hiển thị.
