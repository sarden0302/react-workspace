
const ChapPropsDefault = () => {

    // 부모나 자식 호출
    return (
        <div>
            <Parent />
        </div>
    )
}

/* 기본값 (값이 null 일 경우) 설정
    [방법]
        함수이름.defaultProps = {
            변수이름1 : "변수에 작성할 값1"
            변수이름2 : "변수에 작성할 값2"
        }
 */

const ChildOne = ({name, money}) => {
    return (
        <div>
            <h2>이름 : {name}</h2>
            <h4>당첨금 : {money}</h4>
        </div>
    )
}

// 함수명.defaultProps 대신 default 값 설정하는 방법
// ({}) 내부에 직접적으로 default 값 작성 가능
//                {변수명 : "변수 기본값" , 변수명 : "변수 기본값"}
const ChildTwo = ({name = "미수령", money = 0}) => {
    return (
        <div>
            <h2>이름 : {name}</h2>
            <h4>당첨금 : {money}</h4>
        </div>
    )
}
const Parent = () => {
    // javascript
    return(
        <div>
            {/* html 코드 작성하는 공간. 반드시 <div> or <> 로 전체 감싸기 */}
            <h1>이번주 로또 당첨자</h1>
            <ChildOne name="홍길동" money={10} />
            <ChildOne name="김철수" />
            <ChildOne money={100} />

            <ChildTwo name="오길동" money={50} />
            <ChildTwo name="박철수" />
            <ChildTwo money={100} />
        </div>
    )
}

/***** Child 와 Parent 가 const 로 선언되어지기 전에 객체의 defaultProps(기능) 사용 불가 *****/
// Parent 에서 데이터를 가져오지 못하는 경우
// UI 문제가 발생하는 것을 방지하기 위해
// 자식 컴포넌트에 설정
ChildOne.defaultProps = {
    name : "알 수 없음",
    money : 0
}

export default ChapPropsDefault;