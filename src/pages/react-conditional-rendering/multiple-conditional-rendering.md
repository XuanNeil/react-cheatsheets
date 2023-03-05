## Multiple conditional rendering

- Một object Javascript có các key/value để ánh xạ được gọi là enum
```jsx
const NOTIFICATION_STATES = {
  info: 'Did you know? ...',
  warning: 'Be careful here ...',
  error: 'Something went wrong ...',
};
```

- Một enum là một cách tuyệt vời để xử lý kết xuất có nhiều điều kiện trong React.
```jsx
function Notification({ text, status }) {
  return (
    <div>
      {
        {
          info: <Info text={text} />,
          warning: <Warning text={text} />,
          error: <Error text={text} />,
        }[status]
      }
    </div>
  );
}
```
===
```jsx
const getNotification = text => ({
  info: <Info text={text} />,
  warning: <Warning text={text} />,
  error: <Error text={text} />,
});
function Notification({ status, text }) {
    return <div>{getNotification(text)[status]}</div>;
}
```

==> Tóm lại, kết xuất có điều kiện enum trong React thanh lịch hơn so với switch case. Các đối tượng dưới dạng enum mở ra nhiều tùy chọn để có nhiều kết xuất có điều kiện.