## React props are just the communication channel

- Một component nhận `props` không biết thông tin bắt nguồn từ đâu và như thế nào - Nó chỉ nhìn thấy một object Javascript có tên là `props` trong React. 
- Ở đâu, các `props` có thể bắt nguồn từ thành phần chính hoặc ở đâu đó phía trên hệ thống phân cấp thành phần.
- `Props` có thể được truyền không chỉ từ component cha sang component con mà còn từ các thành phần tổ tiên đến các thành phần con cháu.

```jsx
const App = () => {
    const greeting = {
        title: "React",
        description: "Your component..."
    }
    
    return (
        <div>
            <Welcome text={greeting} />
        </div>
    )
}
const Welcome = ({text}) => {
    return (
        <div>
            <Headline title={`Welcome to ${text.title}`} />
            <Description paragraph={text.description} />
        </div>
    )
}
const Headline = ({title}) => <h1>{title}</h1>;
const Description = ({paragraph}) => <p>{paragraph}</p>
```
