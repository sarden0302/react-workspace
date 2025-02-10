// Properties 약자로 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터
// 자식컴포넌트 props 값을 변경할 수 없음
/*const ChapProps = () => {
    // 부모 컴포넌트
    const parent = () => {
        // 자식에게 전달할 값
        const 값전달 = "전달한값";
        return (
            <div>
                <child 매개변수={값전달}></child>
            </div>
        )
    }

    const child = ({전달받은값}) => {
        return (
            <div>
                {/!* 전달받은 값이 여러 항목일 경우 . 이용해서 세부항목 변수명을 작성 *!/}
                {전달받은값}
            </div>
        )
    }
}*/

/*
Parent : 부모가 상태를 관리
    - DB나 전달받고 전달할 값을 어떻게 받고 전달할 것인지에 대한 상태를 부모 작성


Child : 자식이 UI (User Interface 디자인)
    - 부모에게 전달하거나 전달 받은 값은 자식 Component 디자인 내부에 작성
 */

// 🧒💰👨‍👩‍👧‍👦

// Child 자식 컴포넌트 (부모에게 받은 재산을 표시)
//          ㅇㅇㅇ 자식 얼마 받고
//          ㅁㅁㅁ 자식 얼마 받음
const ChildOne = ({name, inheritance}) => {
    return (
        <div>
            <h2>🧒 {name}의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {inheritance} 억 원</p>
        </div>
    )
}

// DataBase 에서 name, inheritance 이외 컬럼을 다수 가져올 경우
// const 함수이름 = (매개변수자리) = {} 에서 매개변수 자리에 컬럼명칭을 모두 작성하기 보다는
// props 나 abc, xyz 와 같은 매개변수 명칭을 하나 택해서 작성하고
// 예를 들어 props 라는 매개변수를 사용한다면
// props.name, props.inheritance 와 같이 호출해서 사용할 수 있음
// 여기서 props 와 같이 단일 값으로 가져올 경우 {} 사용하지 않음 -> 다수의 데이터 가져올 때 {} 사용
// (props) 작성 후 props.name props.inheritance
// const ChildTwo = ({name, inheritance}) => {
const ChildTwo = (props) => {   // DB 에서 컬럼들을 담고 있는 객체
    return (
        <div>
            <h2>🧒 {props.name}의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {props.inheritance} 억 원</p>
        </div>
    )
}

// Parent 부모 컴포넌트 (자식에게 재산을 넘겨줌)
const Parent = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모의 재산 상속</h1>
            <ChildOne name="이름" inheritance={"재산"}/>
            <ChildOne name="홍길동" inheritance={10}/>
            <ChildTwo name="김철수" inheritance={5}/>
            <ChildTwo name="이영희" inheritance={20}/>
        </div>
    )
}

// 2.

export default Parent;