import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Login = ({setUser}) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        axios
            .post(
                "http://localhost:8080/api/user/login",
                {userId, password}
            )
            .then(
                (response) => {
                    if (response.data.status === "success") {

                        const userData = response.data.user;
                        setUser(userData)
                        localStorage.setItem("user", JSON.stringify(userData));
                        alert("로그인 성공");
                        navigate("/mypage")
                    } else {
                        alert(response.data.message);
                    }
                }
            )
            .catch(
                (err) => {
                    alert("백엔드 컨트롤러와 연결에 있어 문제가 발생했습니다.");
                    console.log("로그인 오류 : ",err);
                }
            )
    }
    return (
        <>
            <h1>로그인</h1>
            <form onSubmit={handleLogin}>
                <label>아이디 : </label>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <label>비밀번호 : </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>로그인</button>
            </form>
        </>
    )
}

export default Login;