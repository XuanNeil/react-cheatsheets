## React props destructuring

- `Props` trong React về cơ bản là tất cả dữ liệu được truyền từ component cha sang component con.
- Trong một component con, các `props` có thể được truy cập trong `function signature` dưới dạng tham số.

```jsx
const App = () => {
  return (
    <div>
      <Welcome text="Welcome to React" />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};
```

```jsx
const App = () => {
  return (
    <div>
      <Welcome text="Welcome to React" myColor="red" />
    </div>
  );
};

const Welcome = ({ text, myColor }) => {
  return <h1 style={{ color: myColor }}>{text}</h1>;
};
```
