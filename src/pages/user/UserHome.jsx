// Route 에서 유저 정보를 전달받고 전달받은 정보로 로그인 유무 설정

import {useNavigate} from "react-router-dom";
import axios from "axios";

const UserHome = ({user}) => {
    // Link 태그 이외 경로 이동 설정 hook
    // useNavigate 리액트에서 사용 가능 기본 자바스크립트에서는 window.location.href 형식 사용
    const navigate = useNavigate();

    const handleLogout = () => {
        axios
            .post("로그아웃 url 주소 작성")
            .then(
                () => {
                    localStorage.removeItem("user");
                    alert("로그아웃 완료");
                    navigate("/login");
                }
            )
            .catch(
                (error) => {
                    alert("로그아웃 할 수 없습니다.");
                    console.log("로그아웃 오류 : ", error);
                }
            );
    }

    const handleLoginPage = () => {
        navigate("/login");
    }
    return (
        <div>
            <h1>유저 홈페이지</h1>
            {
                user ? (
                    <div>
                        <p>환영합니다.{user}님</p>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleLoginPage}>로그인</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserHome;