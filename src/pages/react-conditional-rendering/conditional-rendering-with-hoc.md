## Conditional rendering with HOC

- Higher-Order-Components (HOCs) là sự kết hợp hoàn hảo cho kết xuất có điều kiện trong React.
- HOC có thể trợ giúp với nhiều trường hợp sử dụng, nhưng một trường hợp sử dụng có thể là thay đổi giao diện của một component bằng kết xuất có điều kiện.


```jsx
// Higher-Order Component
function withLoadingIndicator(Component) {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (!isLoading) {
            return <Component {...props} />;
        }

        return (
            <div>
                <p>Loading</p>
            </div>
        );
    };
}

const ListWithLoadingIndicator = withLoadingIndicator(List);

function App({ list, isLoading }) {
    return (
        <div>
            <h1>Hello Conditional Rendering</h1>

            <ListWithLoadingIndicator isLoading={isLoading} list={list} />
        </div>
    );
}
```
- Để thay thế cho HOC, có thể sử dụng kết xuất có điều kiện with `render prop`