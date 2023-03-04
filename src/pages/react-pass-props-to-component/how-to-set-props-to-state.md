## How to set props to state

- How to set props to state?
- Trong trường hợp initial state, hoàn toàn ổn khi lấy nó từ `props`.
- Bạn có thể sử dụng `props` đến làm initial state cho hook như useState hook của React.
```jsx
const User = ({ user, onUpdateName }) => {
  // derive initial state from props
  const [name, setName] = React.useState(user.name);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li>
      {user.name}
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="button" onClick={() => onUpdateName(user, name)}>
        Update
      </button>
    </li>
  );
}
```
