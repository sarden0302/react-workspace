import React, {useState} from "react";

function PracticeUseState() {
    return (
        <div>
            {/* COMPONENT 화
            function 이나 const 로 작성한
            기능과 html 내용을 메인 기능에
            보여주길 원한다면 HTML 태그 형식처럼
            기능 명칭을 작성해주고 / 닫는 태그를 사용하면 된다.

            <기능명칭 />
            */}
            <UseStateOne />
            <UseStateTwo />
            <UseStateThree />
            <UseStateFour />
        </div>
    )
}

const UseStateOne = () => {
    // 사용자가 입력한 텍스트를 화면에 표시하는 컴포넌트 생성
    // 초기값으로 0 or 빈 값 = ""
    // useState : Hook 6가지 기능 중 한가지
    const [text, setText] = useState("");

    // form 이나 input textarea 와 같이 키보드로 값을 입력하는 경우
    // function () {} 이나 const = () => {} 에서 () = 소괄호 = 파라미터 나 매개변수 명칭이
    // 들어가는 자리에 e 나 event 로 매개변수나 파라미터 명칭을 작성하고
    // 키보드로 값을 입력하는 것 -> event : 특정행위가 발생했다.
    // 이벤트가 감지됐을 때 값이 무엇인지 설정
    // e.target.value
    // event.감지.그 값
    const inputChange = (e) => {setText(e.target.value)}
                                            // input 내 작성된 value 값

    // 변수이름 : text
    return (
        <div>
            {/*<input type="text" placeholder="텍스트를 입력하세요." value={text} onChange={(e) => setText(e.target.value)}/>*/}
            <input type="text" placeholder="텍스트를 입력하세요." value={text} onChange={inputChange}/>

            <p>입력한 값 : {text}</p>
        </div>
    )
}

const UseStateTwo = () => {
    // 랜덤으로 숫자 생성하기
    // Math.floor(Math.random() * 100) + 1;
    const [randomNumber, setRandomNumber] = useState(0);
    const randomBtn = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    };
    return(
        <div>
            <p>랜덤 숫자 : {randomNumber}</p>
            <button onClick={randomBtn}>랜덤숫자 생성</button>
        </div>
    )
}

const UseStateThree = () => {
    // 좋아요와 좋아요 취소를 번갈아가며 표시하는 컴포넌트 기능
    const [liked, setLiked] = useState(false);  // 초기값 false;

    return(
        <div>
            <button onClick={() => setLiked(!liked)}>
                {liked ? "좋아요 취소" : "좋아요"}  {/* liked 상태 확인으로 button 값 변경 */}
            </button>
            <p>{liked ? "😊 좋아요를 눌렀습니다" : "😐 좋아요를 눌러보세요!"}</p>
        </div>
    )
}

const UseStateFour = () => {
    // 버튼 클릭 시 "안녕하세요" -> "반갑습니다" 변경

    const [text, setText] = useState("안녕하세요");

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText("반갑습니다.")}>글자변경</button>
        </div>
    )
}
export default PracticeUseState;