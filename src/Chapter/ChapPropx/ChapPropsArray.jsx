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

const ChildTwo = () => {

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* 배열 형식(2개 이상)의 데이터를 표기 */}

            </ul>
        </div>
    )
}

// 메인으로 확인할 배열 리스트
const ChildThree = () => {

    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* 배열 형식(2개 이상)의 데이터를 표기 */}

            </ul>
        </div>
    )
}


const Parent = () => {
    // javascript 작성 공간

    return (
        <div>
            {/* html 태그를 작성하는 공간 */}
            <h1>부모 -> 자식 데이터를 전달 (기본 형태로 전달)</h1>
            <ChildOne name="가나다" age={10} />
            <ChildTwo name="가나다" age={10} />
            <ChildThree />
            <h1>부모 -> 자식 데이터를 전달 (배열 형태로 전달)</h1>

        </div>
    )
}

export default ChapPropsArray;