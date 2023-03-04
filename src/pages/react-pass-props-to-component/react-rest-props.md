## React rest props

- Việc sử dụng `rest destructuring` trong Javascript cũng có thể được áp dụng cho `props`.

```jsx
const App = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    }
    
    return (
        <Button 
            title={count}
            disabled
            onClick={handleIncrement}
        />
    )
}
const Button = ({title, disabled, onClick}) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            {title}
        </button>
    )
}
```
- Theo thời gian, sẽ ngày càng nhiều `props` mà chúng ta muốn chuyển đến Button component và do dó, `function signature` của Button component sẽ tăng size.
- Vẫn có thể làm theo cách trên, rõ ràng về mặt props mà Button component nhận được.
- Tuy nhiên, chúng ta cũng có thể sử dụng tính năng `rest destructuring` của Javascript để thu thập tất cả các thuộc tính còn lại từ một object không bị phá hủy.
```jsx
const Button = ({tite, onClick, ...other}) => {
    return (
        <button disabled={other.disabled} onClick={onClick}>
            {title}
        </button>
    )
}
```

- Làm cho điều này trở nên thuận tiện hơn cho việc triển khai Buttton component, chúng ta có thể sử dụng `spread operator` để trải các phần còn lại cho phần tử HTML của button.
```jsx
const Button = ({title, onClick, ...other}) => {
    return (
        <button onClick={onClick} {...other}>
            {title}
        </button>
    )
}
```

==> Tóm lại: `props spread` và `rest props` có thể giúp ích rất nhiều để giữ cho các chi tiết triển khai ở size có thể đọc được