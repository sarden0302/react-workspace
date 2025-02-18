import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Mypage = ({user}) => {
    console.log("Mypage :", user);
    const navigate = useNavigate();
    const [storedUser, setStoredUser] = useState(user);

    useEffect(() => {
        console.log("useEffect :", user);
        if (!user) {
            const savedUser = localStorage.getItem("user");
            if (savedUser) {
                setStoredUser(JSON.parse(savedUser));
            } else {
                navigate("/login");
            }
        }
    }, [user, navigate]);

    // if (!storedUser) return <div>로딩 중....</div>;

    // props 사용 예정
    const handleLogout = () => {
        alert("로그아웃 버튼")
    }

    return (
        <>
            {/* 삼항 연산자 활용하는 것이 중요 */}
            {
                storedUser ? (
                    <div>
                        <h1>마이페이지</h1>
                        <p>아이디 : {storedUser.userId}</p>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>
                ) : (
                    <div>로딩 중....</div>
                )
            }
        </>
    )

}

export default Mypage;