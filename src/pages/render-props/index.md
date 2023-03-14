## Render props
- `render props` dùng để chỉ một kỹ thuật chia sẻ mã giữa các thành phần React bằng cách sử dụng 1 prop có giá trị là 1 function.
- Một component với render prop sẽ 1 function return về 1 element React và gọi nó thay vì triển khai logic render của chính nó.
```jsx
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

1. Sử dụng Render props cho các cross-cutting mối quan tâm
- trong ví dụ, component theo dõi vị trị mouse trong ứng dụng của bạn
```jsx
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}
```
- Bây giờ câu hỏi là: Làm thê nào có thể sử dụng lại hành vi này trong 1 component khác. Nói cách khác nếu 1 component khác cần vị trí con trỏ, chúng ta có thể gói gọn hành vi đó để có thể dễ dàng chia sẻ với component đó.
- ví dụ: giả sử chúng ta có 1 component `<Cat />` hiển thị ảnh 1 con mèo đang đuổi theo con chuột trên màn hình. Chúng ta có sử dụng `<Cat mouse={{x, y}} />` để báo cho component biết tọa độ của con chuột để nó biết vị trí đặt hình ảnh trên màn hình.
```jsx
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}
class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

                {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
                <Cat mouse={this.state} />
            </div>
        );
    }
}
class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <MouseWithCat />
            </div>
        );
    }
}
```
- Cách tiếp cận này sẽ phù hợp với trường hợp sử dụng cụ thể, nhưng chưa đạt được mục tiêu thực sự gói gọn hành vi theo cách có thể sử dụng lại.
- Bây giờ, mỗi khi chúng ta muốn vị trí chuột cho 1 trường hợp sử dụng khác, thì phải tạo 1 component mới(tức là về cơ bản là một `<MouseWithCat />` khác) hiển thị thứ gì đó cụ thể cho trường hợp sử dụng đó.
-> Đây là nơi hỗ trợ render prop xuất hiện: Thay vì hard-coding `<Cat />` bên trong thành phần `<Mouse />` và thay đổi hiệu quả đầu ra được hiển thị của nó.
```jsx
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
```
- Giờ đây, thay vì sao chép component `<Mouse />` 1 cách hiệu quả và mã hóa cứng trong render method để giải quyết cho 1 trường hợp sử dụng sụ thể, chúng ta có thể cung cấp 1 render prop mà `<Mouse />` có thể sử dụng để xác định động những gì nó kết xuất.
-> Cụ thể hơn, 1 render prop là 1 function prop mà 1 component sử dụng để biết những gì cần kết xuất.
- Kỹ thuật này, làm cho hành vi cần chúng ta chia sẻ cực kỳ linh động.
- Một điều thú vị, cần lưu ý về render props là bạn có thể triển khai hầu hết các higher-order component (HOC) bằng cách sử dụng 1 component thông thường với 1 render prop.
- Ví dụ: Nếu bạn muốn có 1 component `withMouse` thay vì component `Mouse`, bạn có thể dễ dàng tạo 1 component bằng cách sử dụng `<Mouse />` thông thường với 1 render prop.
```jsx
// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )}/>
      );
    }
  }
}
```

2. Sử dụng Props khác ngoài render.
- Điều quan trọng cần nhớ là chỉ vì mẫu được gọi là `render props` nên bạn không cần phải sử dụng 1 props có tên `render` để sử dụng mẫu này.
- Trên thực tế, bất kỳ `any prop` nào là function mà 1 component sử dụng để biết kế xuất đều là 1 `render prop`.
```jsx
<Mouse>
  {mouse => (
    <p>The mouse position is {mouse.x}, {mouse.y}</p>
  )}
</Mouse>
```

3. Cẩn trọng (Caveats).
   - Cẩn trọng khi sử dụng `render prop` with `PureComponent`.