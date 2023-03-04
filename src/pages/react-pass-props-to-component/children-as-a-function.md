## Children as a function

- Khái niệm `children as a function` hoặc `child as a function`, hay còn gọi là `render props`, là một trong những advanced patterns trong React(bên cạnh `higher-order components`).
- Các thành phần triển khai mẫu này có thể được gọi là `render prop components`.

- Đầu tiên, hãy bắt đầu với `render props`.
- Về cơ bản, nó là một function được truyền vào dưới dạng prop. Functin nhận tham số(trong trường hợp này là số tiền), nhưng cũng hiển thị `JSX`(trong trường hợp này là các component để chuyển đổi tiền tệ).
```jsx
const App = () => {
    return (
        <div>
            <h1>US Dollar to Euro:</h1>
            <Amount toCurrency={(amount) => <Euro amount={amount} />} />
            <h2>US Dollar to Pound:</h2>
            <Amount toCurrency={(amount) => <Pound amount={amount}/> } />
        </div>
    )
}
const Amount = ({toCurrency}) => {
    const [amount, setAmount] = useState(0);
    
    const handleIncrement = () => setAmount(amount + 1);
    const handleDecrement = () => setAmount(amount - 1);
    
    return(
        <div>
            <button onClick={handleIncrement}>
                +
            </button>
            <button onClick={handleDecrement}>
                -
            </button>
            <p>US Dollar: {amount}</p>
            {toCurrency(amount)}
        </div>
    )
}
const Euro = ({amount}) => <p>Euro: {amount * 0.5}</p>
const Pound = ({amount}) => <p>Pound: {amount * 0.76}</p>
```

- Thứ hai, cấu trúc lại toàn bộ từ việc có thể tùy ý render prop sang `children as a function`.

```jsx
const App = () => {
    return (
        <div>
            <h1>US Dollar to Euro:</h1>
            <Amount>{(amount) => <Euro amount={amount}/>}</Amount>
            <h1>US Dollar to Pound:</h1>
            <Amount>{(amount) => <Pound amount={amount} />}</Amount>
        </div>
    )
}
const Amount = ({children}) => {
    const [amount, setAmount] = useState(0);
    
    const handleIncrement = () => setAmount(amount + 1);
    const handleDecrement = () => setAmount(amount - 1);
    
    return(
        <div>
            <button onClick={handleIncrement}>
                +
            </button>
            <button onClick={handleDecrement}>
                -
            </button>
            <p>US Dollar: {amount}</p>
            {children(amount)}
        </div>
    )
}
const Euro = ({amount}) => <p>Euro: {amount * 0.5}</p>
const Pound = ({amount}) => <p>Pound: {amount * 0.76}</p>
```

```jsx
const App = () => {
    return (
        <Amount>
            {(amount) => (
                <>
                    <Euro amount={amount} />
                    <Pound amount={amount} />
                </>
            )}
        </Amount>
    )
}
```