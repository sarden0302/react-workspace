import {useState} from "react";

const PracticePropsFunction = () => {

    return (
        <div>
            <Parent1 />
            <Parent2 />
            <Parent3 />
            <Parent4 />
            <Parent5 />
            <ParentComponent />
        </div>
    )
}

// `message` `setMessage` `changeMessage`
const Child1 = ({changeMessage}) => {
    return <button onClick={changeMessage}>메세지 변경</button>
}

const Parent1 = () => {
    const [message, setMessage] = useState("기본 메세지");

    const messageHandle=() => {
        setMessage("버튼이 클릭되었습니다");
    }

    return (
        <div>
            <h1>{message}</h1>
            <Child1 changeMessage={messageHandle} />
        </div>
    )
}

// 자식 컴포넌트 (버튼 클릭 시 숫자 증가)
const Child2 = ({increaseNumber}) => {
    return <button onClick={increaseNumber}>숫자 증가</button>;
};

// 부모 컴포넌트
const Parent2 = () => {
    const [number , setNumber] = useState(0);

    const handleIncreaseNumber = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <h1>현재 숫자: {number}</h1>
            <Child2 increaseNumber={handleIncreaseNumber} />
        </div>
    );
};

// 자식 컴포넌트 (버튼 클릭 시 배경색 변경)
const Child3 = ({changeColor}) => {
    return <button onClick={changeColor}>배경색 변경</button>;
};

// 부모 컴포넌트
const Parent3 = () => {
    const [color, setColor] = useState("white");

    const handleChangeColor = () => {
        setColor(color === "white" ? "lightblue" : "white");
    };

    return (
        <div style={{ backgroundColor: color, height: "100vh", textAlign: "center" }}>
            <h1>배경색 변경</h1>
            <Child3 changeColor={handleChangeColor} />
        </div>
    );
};

// 자식 컴포넌트 (버튼 클릭 시 부모의 텍스트 변경)
const Child4 = ({updateText}) => {
    return <button onClick={updateText}>텍스트 변경</button>;
};

// 부모 컴포넌트
const Parent4 = () => {
    const [text, setText] = useState("안녕하세요!");

    const handleUpdateText= () => {
        setText("반갑습니다!");
    };

    return (
        <div>
            <h1>{text}</h1>
            <Child4 updateText={handleUpdateText} />
        </div>
    );
};

// 자식 컴포넌트 (버튼 클릭 시 좋아요 상태 변경)
const Child5 = ({ toggleLike }) => {
    return <button onClick={toggleLike}>좋아요/취소</button>;
};

// 부모 컴포넌트
const Parent5 = () => {
    const [liked, setLiked] = useState(false);

    // onCLick or onSubmit 같이 수행 기능 명칭 handle 표기
    const handleToggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <h1>{liked ? "❤️ 좋아요!" : "♡ 좋아요 취소"}</h1>
            <Child5 toggleLike={handleToggleLike} />
        </div>
    );
};

// 자식 컴포넌트
const UserList = ({ users }) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age}세
                    </li>
                ))}
            </ul>
        </div>
    );
};

// 부모 컴포넌트
const ParentComponent = () => {
    const users = [
        { name: "홍길동", age: 25 },
        { name: "김철수", age: 30 },
        { name: "이영희", age: 28 },
    ];

    return (
        <div>
            <h1>배열 Props 전달</h1>
            <UserList users={users} />
        </div>
    );
};


export default PracticePropsFunction;