## React props with default value

- Trong một số trường hợp, bạn có thể muốn chuyển các giá trị mặc định làm `props`.
- Cách tiếp cập tốt nhất với điều này là sử dụng toán tử `OR` logic của javascript.

```jsx
const Welcome = ({ title, description }) => {
  title = title || 'Earth';

  return (
    <div>
      <Title title={`Welcome to ${title}`} />
      <Description description={description} />
    </div>
  );
};
```
- Cũng có thể viết inline như props
```jsx
const Welcome = ({ title, description }) => (
  <div>
    <Title title={`Welcome to ${title || 'Earth'}`} />
    <Description description={description} />
  </div>
);
```
- Tuy nhiên, có thể sử dụng default value cho prop khi sử dụng destructuring.
```jsx
const Welcome = ({ title = 'Earth', description }) => (
  <div>
    <Title title={`Welcome to ${title}`} />
    <Description description={description} />
  </div>
);
```