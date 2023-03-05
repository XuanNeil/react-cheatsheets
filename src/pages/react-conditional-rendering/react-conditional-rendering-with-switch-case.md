## React conditional rendering: switch case

- Bây giờ có thể xảy ra trường hợp bạn có nhiều kết cấu có điều kiện.
- Lấy ví dụ, 1 thành phần thông báo hiển thị thành phần lỗi, cảnh báo hoặc thông tin dựa trên status.

```jsx
function Notification({ text, status }) {
  if (status === 'info') {
    return <Info text={text} />;
  }

  if (status === 'warning') {
    return <Warning text={text} />;
  }

  if (status === 'error') {
    return <Error text={text} />;
  }

  return null;
}
```

- Có thể sử dụng switch case cho nhiều kết cấu có điều kiện.
```jsx
function Notification({ text, status }) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
```
- switch case là cách hay cho nhiều kết cấu có điều kiện. Nhưng nó đi kèm với những nhược điểm giống như if else.
- 1 switch case không thể sử dụng trong JSX.
- Trên thực tế, có thể thực hiện được với chức năng kết cấu có kiều kiện tự gọi.

```jsx
function Notification({ text, status }) {
  return (
    <div>
      {(function() {
        switch (status) {
          case 'info':
            return <Info text={text} />;
          case 'warning':
            return <Warning text={text} />;
          case 'error':
            return <Error text={text} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
```
```jsx
function Notification({ text, status }) {
  return (
    <div>
      {(() => {
        switch (status) {
          case 'info':
            return <Info text={text} />;
          case 'warning':
            return <Warning text={text} />;
          case 'error':
            return <Error text={text} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
```

==> Tóm lại, switch case giúp bạn có nhiều kết cấu có điều kiện. Nhưng nó không phải là cách tốt nhất, hãy xem cách kết xuất có điều kiện với enum.  