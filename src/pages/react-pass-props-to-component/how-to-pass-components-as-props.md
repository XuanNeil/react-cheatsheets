## How to pass components as props

- Trước khi bạn tìm hiểu về `props` children React, nó cho phép bạn chuyển các phần tử HTML/React cho các thành phần dưới dạng `props`:

```jsx
const User = ({user}) => {
    return (
        <Profile user={user}>
            <AvatarRound user={user} />
        </Profile>
    )
}
const Profile = ({ user, children }) => (
    <div className="profile">
        <div>{children}</div>
        <div>
            <p>{user.name}</p>
        </div>
    </div>
);
const AvatarRound = ({ user }) => (
    <img className="round" alt="avatar" src={user.avatarUrl} />
);
```
- Tuy nhiên, bạn muốn truyền nhiều phần tử React và đặt chúng ở các vị trí khác nhau thì sao?
- Bạn không cần sử dụng `children prop`, bởi vì bạn chỉ có một trong số chúng và thay vào đó, bạn chỉ cần sử dụng props thông thường.

```jsx
const User = ({user}) => {
    return (
        <Profile
            user={user}
            avatar={<AvatarRound user={user}/>}
            biography={<BiographyFat user={user} />}
        />
    )
}
const Profile = ({user, avatar, biography}) => {
    return (
        <div className={'profile'}>
            <div>{avatar}</div>
            <div>
                <p>{user.name}</p>
                {biography}
            </div>
        </div>
    )
}
const AvatarRound = ({ user }) => (
    <img className="round" alt="avatar" src={user.avatarUrl} />
);

const BiographyFat = ({ user }) => (
    <p className="fat">{user.biography}</p>
);
```
- Thường thì cách tiếp cận này được sử dụng khi có một thành phần bố cục xung quanh lấy nhiều thành phần làm nội dung với các `props`.