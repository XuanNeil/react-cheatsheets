## React spread props

- Một chiến lược để chuyển tất cả các thuộc tính của 1 object sang một thành phần con là sử dụng `spread operator` Javascript
- `spread operator` của Javascript trong React là một tính năng mạnh mẽ hữu ích.

```jsx
const App = () => {
    const greeting = {
        title: "This is Title",
        description: "Your component..."
    }
    return (
        <div>
            <Welcome {...greeting} />
        </div>
    )
}
const Welcome = ({title, description})=> {
    return (
        <div>
            <Headline title={title} />
            <Description description={description} />
        </div>
    )
}
const Headline = ({title}) => <h1>{title}</h1>
const Description = ({description}) => <p>{description}</p>
```
- Props spread có thể được sử dụng để trải rộng toàn bộ object với các key value chính xuống thành phần con.
- Nó có tác dụng tương tự như chuyển từng thuộc của thuốc tính object theo thuộc tính cho component.
- Ví dụ: Đôi khi bạn có một component ở giữa mà không quan tâm đến các `props` và chỉ chuyền chúng cho component tiếp theo.
```jsx
const App = () => {
  const title = 'React';
  const description = 'Your component library for ...';

  return (
    <div>
      <Welcome title={title} description={description} />
    </div>
  );
};
const Welcome = (props) => {
    return (
        <div style={{
            border: '1px solid black',
            height: '200px',
            width: '400px',
        }}>
            <Message {...props} />
        </div>
    );
};
const Message = ({ title, description }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
        </>
    );
}
```

- Lưu ý rằng các cặp attribute/value trải rộng cũng có thể bị ghi đè.
```jsx
const Welcome = (props) => {
  return (
    <div>
      <Message {...props} title="JavaScript" />
    </div>
  );
};

// Message prints title "JavaScript"
```

- Nếu props spread xuất hiện sau cùng, tất cả các thuộc tính trước đó sẽ bị ghi đè nếu chúng có mặt trong props
```jsx
const Welcome = (props) => {
  return (
    <div>
      <Message title="JavaScript" {...props} />
    </div>
  );
};

// Message prints title "React"
```

==> Xét cho cùng, spread operator luôn có thể được sử dụng để gán từng key/value của một object Javascript một cách thuận tiện cho một cặp attribute/value của phần tử HTML.
