## React children prop

- Các children prop trong React có thể được sử dụng để kết hợp các component React với nhau.
- Do tính năng này, bạn có thể đặt nguyên hàm Javascript hoặc JSX giữa các thẻ của phần tử mở và đóng (<>{function}</>).

```jsx
const App = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>
                {count}
            </Button>
        </div>
    )
}
const Button = ({onClick, children}) => {
    <button onClick={onClick}>{children}</button>
}
```
- Trong trường hợp này, chỉ có 1 string được đặt giữa các thẻ của phần tử. Sau đó, trong thành phần con, bạn có thể tận dụng mọi thứ ở giữa các thẻ bằng cách sử dụng `React's children props`.