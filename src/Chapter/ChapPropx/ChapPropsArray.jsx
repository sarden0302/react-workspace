const ChapPropsArray = () => {

    return (
        <div>
            {/*
                <Parent><Parent />

                만약에 태그 내부에 요소로 특정 값을 넣거나
                특별히 설정할 일이 없다면 아래와 같이
                단축해서 작성할 수 있음
                <Parent />
            */}
            <Parent />
        </div>
    )
}

const ChildOne = ({name, age}) => {

    return (
        <div>
            <h2>name, age 로 가져온 사용자 목록</h2>
            <ul>
                {/* 배열 형식(2개 이상)의 데이터를 표기 */}
                <li>{name} / {age}</li>
            </ul>
        </div>
    )
}

const ChildTwo = (props) => {

    return (
        <div>
            <h2>props 로 가져온 사용자 목록</h2>
            <ul>
                {/* 배열 형식(2개 이상)의 데이터를 표기 */}
                <li>{props.name} / {props.age}</li>
            </ul>
        </div>
    )
}

// 메인으로 확인할 배열 리스트
// ※ 배열(users)을 매개변수로 받아올 때 {} 생략 가능
// users 목록 형태 ok RestController 로 가져오는 형식
const ChildThree = ({users}) => {

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* 배열 형식(2개 이상)의 데이터를 표기 */}
                {/* 방법 1
                    map(() => )
                        - return 생략 가능
                        - UI 로 표현해줄 때 많이 사용
                    Parent 에서 가져온 변수명.map((반복문 내에서 사용할 변수명, index(순서) => (<li key={index}>{user.name} / {user.age}</li>))
                */}
                {
                    // html 태그 내에서 javascript 로 작성한 값을 사용하기 위해서는 반드시 {} 를 작성 후 변수이름이나 기능 작성해야 한다
                    users.map((user, index) => (
                        <li key={index}>{index} : {user.name} / {user.age}</li>
                    ))
                }

                {
                    // html 태그 내에서 javascript 로 작성한 값을 사용하기 위해서는 반드시 {} 를 작성 후 변수이름이나 기능 작성해야 한다
                    users.map((user, index) => {
                        // 추가적으로 작성할 js 가 필요하다면 js 작성 공간
                        return (
                            <li key={index}>{index} : {user.name} / {user.age}</li>
                        )
                    })
                }

                {/* 방법 2
                    map(() => {return()}     )
                              {return ()} 추가
                        - return 반드시 작성
                        - UI 와 기능(js)을 동시에 표현할 때 많이 사용
                Parent 에서 가져온 변수명.map((반복문 내에서 사용할 변수명, index(순서) => {return (<li key={index}>{user.name} / {user.age}</li>);})
                */}
            </ul>
        </div>
    )
}


const Parent = () => {
    // javascript 작성 공간
    // name 과 age 를 담을 배열 생성 -> [목표] 추후 DB 로 가져온 값으로 변경

    // 배열 형태는 [] 로 작성
    const numberList = [1, 2, 3]
    const stringList = ["가", "나", "다"]

    // 만약 배열에서 한 칸 당 값을 두 개씩 가져오고 싶다면 {} 로 감싸서 가져오기
    const numStringListOne = [
                                                        {number:1, string:"가"},
                                                        {number:2, string:"나"},
                                                        {number:3, string:"다"}
                                                    ]
    /* DB 에서 가져온 값을 표기할 때 사용할 배열 방식
                                        [{React 에서 가져온 DB 를 사용할 변수 이름, BackEnd(Controller) 에서 전달받은 데이터}]
     */
    const numStringListTwo = [
                                                        {numberList:numberList, stringList:stringList}
                                                    ]

    const userList = [
        {name : "홍길동", age : 25},
        {name : "김철수", age : 35},
        {name : "박영희", age : 45}
    ]
    return (
        <div>
            {/* html 태그를 작성하는 공간 */}
            <h1>부모 -> 자식 데이터를 전달 (기본 형태로 전달)</h1>
            <ChildOne name="가나다" age={10} />
            <ChildTwo name="마바사" age={10} />

            <h1>부모 -> 자식 데이터를 전달 (배열 형태로 전달)</h1>
            {/* user : ChildThree 에서 사용할 변수 명칭 && userList : 사용할 데이터 */}
            <ChildThree users={userList}/>
        </div>
    )
}

export default ChapPropsArray;