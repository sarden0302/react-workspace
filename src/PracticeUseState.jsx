function PracticeUseState() {
    return (
        <div>
            <UseStateOne />
        </div>
    )
}

function UseStateOne() {
    // 사용자가 입력한 텍스트를 화면에 표시하는 컴포넌트 생성
    // 변수이름 : text
    return (
        <div>
            <input type="text" placeholder="텍스트를 입력하세요."
            value={
                   onChange{(e): => (e.target.value)}
            />

            <p>입력한 값 : {}</p>
        </div>
    )
}

function UseStateTwo() {
    // 랜덤으로 숫자 생성하기
    // Math.floor(Math.random() * 100) + 1;
    return(
        <div>
            <p>랜덤 숫자 : {}</p>
            <button onClick={randomBtn}>랜덤숫자 생성</button>
        </div>

    )

}

export default UseStateOne;