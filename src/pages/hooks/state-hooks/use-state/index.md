```
const [state, setState] = useState(initialState)
```

## 1. Reference
    - useState(initialState)
    - set functions, like setSomething(nextState)

## 2. Usage
    - Adding state to a component (Thêm trạng thái vào 1 component)
    - Updating state based on the previous state (Update state dựa trên trạng thái trước)
    - Updating objects and arrays in state
    - Avoiding recreating the initial value (Tránh tái tạo trạng thái ban đầu)
    - Resetting state with a key 
    - Storing information from previous renders (Lưu trữ thông tin từ các lần hiển thị trước)

## 3. Troubleshooting (Xử lý sự cố)
    - I’ve updated the state, but logging gives me the old value (đã cập nhật trạng thái, nhưng việc ghi nhật ký mang lại giá trị cũ)
    - I’ve updated the state, but the screen doesn’t update (đã cập nhật trạng thái, nhưng màn hình không cập nhật)
    - I’m getting an error: "Too many re-renders" (gặp lỗi: "Quá nhiều kết xuất lại")
    - My initializer or updater function runs twice (Hàm khởi tạo hoặc update function chạy hai lần)
    - I’m trying to set state to a function, but it gets called instead (đang set trạng thái cho một hàm, nhưng thay vào đó, nó được gọi)

Tham Khao:
    - https://react.dev/reference/react/useState
    - https://www.robinwieruch.de/react-usestate-hook/


