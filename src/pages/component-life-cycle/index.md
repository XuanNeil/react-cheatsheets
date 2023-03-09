## Component Life Cycle

1. Mounting
     - constructor()
     - static getDerivedStateFromProps()
     - render()
     - componentDidMount()
2. Updating
- Một bản update có thể được gây ra bởi những thay đổi của props hoặc state.
- Các phương thức này được gọi theo thứ tự sau khi 1 component đang được kết xuất lại.
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
3. Unmounting
- Phương thức này được gọi khi 1 component đang bị xóa khỏi DOM.
    - componentWillUnMount()
4. Error Handling
- Gọi khi có lỗi trong quá trình rendering, trong life cycle hoặc constructor của bất kỳ thành phần con nào.
    - static getDerivedStateFromError()
    - componentDidCatch()

### render()
- render method bắt buộc duy nhất trong class component.
- Khi được gọi, nó sẽ kiểm tra `this.props` và `this.state` và return về 1 trong các loại sau:
    - React elements. Thường được tạo thông qua JSX. ví dụ `<MyComponent />` là các phần tử React hiển thị 1 node DOM hoặc 1 component do user xác định tương ứng.
    - Arrays and fragments. Cho phép return nhiều phần tử từ render
    - Portals. Cho phép kết cấu children thành 1 cây con DOM khác.
    - String and numbers. Được hiển thị dưới dạng các nút văn bản trong DOM.
    - Booleans or null or undefined. Render nothing (return test && `<Child />`)
- render() phải pure(thuần túy), nghĩa là nó không sửa đổi state component, nó trả về cùng một kết quả mỗi khi nó được gọi và nó không tương tác trực tiếp với trình duyệt.
- Nếu cần tương tác với trình duyệt, hãy `componentDidMount()` hoặc các life cycle method khác.
- Giữ cho render() thuần túy làm cho các component dễ suy đoán hơn.
- Note:  
```
    render() sẽ không được gọi nếu `shouldComponentUpdate()` return false
```

### constructor()
- Nếu không khởi tạo state và không liên kết các method (don't bind methods), thì không cần triển khai constructor cho thành phần React của bạn.
- `constructor` trong 1 component React được gọi trước khi nó được mounted.
- Khi triển khai constructor cho lớp con React.Component, bạn nên gọi super(props) trước bất kỳ câu lệnh nào khác. Nếu không, this.props sẽ undefined trong constructor, điều này có thể dẫn đến lỗi.
- Thông thường, trong React constructor chỉ được sử dụng cho 2 mục đích.
     - Khởi tạo trạng thái cục bộ bằng cách gán 1 object cho this.state
     - Liên kết các method xử lý sự kiện (Bind event handler).
- Bạn không nên gọi setState() trong constructor(). Thay vào đó, nếu component của bạn cần sử dụng state, hãy gán giá trị ban đầu cho this.state trực tiếp trong constructor.
```
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
- constructor là nơi duy nhất mà bạn nên chỉ định trực tiếp this.state. Trong tất cả các method khác, bạn cần sử dụng this.setState() để thay thế.
- Tránh bất kỳ tác dụng phụ (side-effects) hoặc đăng ký (subscriptions) nào trong constructor. Đối với những trường hợp sử dụng đó, hãy sủ dụng `componentDidUpdate()` để thay thế.
- Note:
    - Tránh copy props vào state! Đây là 1 sai lầm phổ biến.
   ```
    constructor(props) {
    super(props);
    // Don't do this!
    this.state = { color: props.color };
    }
   ```
  - Vấn đề là nó vừa không cần thiết(có thể sử dụng this.props.color trực tiếp thay thế) vừa tạo ra lỗi(các bản update cho color props sẽ không được phản án trong state).
  - Chỉ sử dụng pattern này nếu bạn có cố tình muốn bỏ qua các bản update props. Trong trường hợp đó, bạn nên đổi tên prop thành initialColor hoặc defaultColor


### componentDidMount()
- Được gọi ngay sau khi 1 component được mounted, quá trình khởi tạo yêu cầu các node DOM nên được truy cập tại đây.
- Nếu bạn cần load data từ 1 điểm cuối từ xa (remote endpoint) đây là nơi tốt để khởi tạo yêu cầu Network (request Network).
- Phương thức này là nơi tốt để thiết lặp bất ký đăng ký nào(subscriptions). Nếu bạn làm vậy, đừng quên hủy đăng ký trong `componentWillUnmount()`.
- Bạn có thể gọi setState() ngay lập tức trong `componentDidMount()`. Nó sẽ kích hoạt 1 kết cấu bổ sung (extra rendering), nhưng nó sẽ xảy ra trước khi trình duyệt cập nhật màn hình.
- Điều này đảm bảo rằng mặc dù render() sẽ được gọi 2 lần trong trường hợp này nhưng user sẽ không thấy state trung gian.
- Sử dụng pattern này 1 cách thận trọng vì nó thường gây ra các vấn đề hiệu suất. Trong hầu hết các trường hợp, thay vào đó, bạn có thể gán initial state trong constructor.
- Tuy nhiên, nó có thể cần thiết cho các trường hợp như modal và tooltips khi bạn cần node DOM trước khi hiển thị thứ gì đó phụ thuộc vào kích thước hoặc vị trí của nó.

### componentDidUpdate()
- Được gọi ngay sau khi quá trình update diễn ra. Method này không được gọi cho kết cấu ban đầu (initial state).
- Sử dụng điều này như một cơ hội để hoạt động trên DOM khi thành phần đã được update.
- Đây cũng là một nơi tốt để thực hiện các yêu cầu mạng miễn là bạn so sánh các props hiện tại với các props trước đó(ví dụ: yêu cầu mạng có thể không cần thiết nếu các props không thay đổi).
```
componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }

```
- Bạn có thể gọi setState() ngay lập tức trong `componentDidUpdate()` nhưng lưu ý rằng nó phải có điều kiện bao bọc như trong ví dụ trên, nếu không sẽ gây ra một vòng lặp vô hạn.
- Nó cũng gây ra quá trình kết xuất lại bổ sung, mặc dù user không nhìn thấy nhưng có thể ảnh hưởng đến hiệu xuất của component.
- Note:
```
componentDidUpdate() sẽ không được gọi nếu `shouldComponentUpdate` trả về false.
```

### componentWillUnmount()
- Được gọi ngay lập tức trước khi 1 component unmounted và destroyed.
- Thực hiện mọi thao tác cleanup trong method này, chẳng hạn như invalidating timers, hủy yêu cầu mạng hoặc xóa bỏ đăng ký đã được tạo trong `componentDidMount()`
- Bạn không nên gọi setState() trong componentWillUnMount() bởi vì component này sẽ không bao giờ được re-rendered.
- Khi một phiên bản thành phần unmounted, nó sẽ không bao giờ được mounted lại.

### shouldComponentUpdate()
- Sử dụng `shouldComponentUpdate()` để cho React biết nếu đầu ra của component không bị ảnh hưởng bởi thay đổi hiện tại về state hoặc props.
- Hành vi mặc định là re-render trên mọi state thay đổi và trong phần lớn các trường hợp, bạn nên dựa vào hành vị mặc định.
- `shouldComponentUpdate()` được gọi trước khi render, khi nhận được các props hoặc state mới.
- Default return true
- Phương pháp chỉ tồn tại dưới dạng tối ưu hóa hiệu suất. Đừng dựa vào nó để ngăn render, vì điều này có thể dẫn đến lỗi.
- Cân nhắc sử dụng `PureComponent` tích hợp sẵn thay vì viết `shouldComponentUpdate()` bằng tay.
- `PureComponent` thực hiện so sánh so sài giữa các props và state, đồng thời giản khả năng bỏ qua 1 bản update cần thiết.
- Nếu bạn tự tin rằng mình muốn viết nó bằng tay, bạn có thể so sánh this.props với nextProps và this.state với nextState và trả về false để thông báo cho React bỏ qua bản cập nhật.
- Note: Việc trả về false không ngăn các component con hiện thị lại khi state của chúng thay đổi.
- Chúng tôi khuyên bạn, không nên thực hiện kiểm tra sâu (deep equality) hoặc sử dụng `JSON.stringfy()` trong `shouldComponentUpdate`. Nó rất không hiệu quả và gây ra hiệu suất.
- Hiện tại, nếu `shouldComponentUpdate()` return false, thì `render()` và `componentDidUpdate()` sẽ không được gọi.