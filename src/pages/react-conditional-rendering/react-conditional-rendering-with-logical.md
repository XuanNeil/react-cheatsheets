## React conditional rendering in react: &&

- Điều thường xảy ra là bạn muốn hiển thị một phần tử hoặc null. Bạn đã học được rằng một if đơn giản sẽ giúp giải quyết vấn đề đó.
- Tuy nhiên, bạn muốn có thể inline điều kiện giống như 1 ternary operator thì có thể sử dụng logical && operator.
- Khi dùng logical && operator, nó tồn tại một cách loại bỏ sự cần thiết phải trả về null.

```jsx
function LoadingIndicator({ isLoading }) {
  return <div>{isLoading ? <p>Loading...</p> : null}</div>;
}
```

- Trong React bạn có thể sử dụng. Nếu điều kiện true, biểu thức sau logical && operator sẽ được hiển thị. Ngược lại, điều kiện sai, React sẽ bỏ qua và bỏ qua kiểu thức.
```jsx
function LoadingIndicator({ isLoading }) {
  return <div>{isLoading && <p>Loading...</p>}</div>;
}
```

==> Đó là cách khi bạn muốn không trả lại gì hoặc 1 phần tử bên trong `JSX`. Nó còn được gọi là short-circuit(đánh giá ngắn mạch), điều này thậm chí còn ngắn gọn hơn ternary operator.