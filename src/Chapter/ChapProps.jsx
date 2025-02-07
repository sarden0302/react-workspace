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


// 🧒💰👨‍👩‍👧‍👦

// Child 자식 컴포넌트 (부모에게 받은 재산을 표시)
//          ㅇㅇㅇ 자식 얼마 받고
//          ㅁㅁㅁ 자식 얼마 받음
const Child = ({name, inheritance}) => {
    return (
        <div>
            <h2>🧒 {name}의 재산 상속 내역</h2>
            <p>💰 상속받은 재산 : {inheritance} 억 원</p>
        </div>
    )
}

// Parent 부모 컴포넌트 (자식에게 재산을 넘겨줌)
const Parent = () => {
    return (
        <div>
            <h1>👨‍👩‍👧‍👦 부모의 재산 상속</h1>
            <Child name="이름" inheritance={"재산"}/>
            <Child name="홍길동" inheritance={10}/>
            <Child name="김철수" inheritance={5}/>
            <Child name="이영희" inheritance={20}/>
        </div>
    )
}

export default Parent;