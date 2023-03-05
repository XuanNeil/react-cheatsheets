## Conditional rendering react

- `conditional rendering` trong react hoạt động giống như cách điều kiện hoạt động trong Javascript
- Sử dụng operator như: `if` hoặc `condition operator` để tạo các phần tử hiện thị trạng thái hiện tại và để React cập nhật giao diện người dùng để khớp với chúng.

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
```

- `If` với toán tử Logical &&
```jsx
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```
- Với điều kiện true, component bên phải ngay sau && sẽ xuất hiện trong đầu ra.
- Ngược lại false, React sẽ bỏ qua.


- if-else với `conditional operator`.
```jsx
function Button({isLoggedIn}){
    
    return (
        <div>
            {isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    );
}
```


- Ngăn không cho component rendering
- Trong một số trường hợp, bạn muốn 1 component ẩn đi mặc dù nó được hiển thị bởi một component khác.
- Để làm điều này return null thay vì hiển thị đầu ra.
- Trong ví dụ này, <WarningBanner /> được hiển thị tùy thuộc vào giá trị của prop là warn. Nếu giá trị prop là false, thì component này sẽ không hiển thị.
```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}
const App = () => {
    const [showWarning, setShowWarning] = useState(true);

    const handleToggle = () => {
        setShowWarning(!showWarning);
    }
    
    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggle}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}
```

- Return null không ảnh hưởng đến việc kích hoạt các method lifecycle của component. Chẳng hạn, `componentDidUpdate` sẽ vẫn được gọi.
