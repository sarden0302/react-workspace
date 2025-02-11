

const User = ({users}) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* map() 형태로 데이터 불러오기 "ㅇㅇㅇ" 님은 ㅁㅁ 세 입니다. */}
                {
                    users.map((user, index) => (
                        <li key={index}>{user.name} 님은 {user.age} 세 입니다.</li>
                    ))
                }
            </ul>
        </div>
    )
}

const Product = ({products}) => {
    return (
        <div>
            <h2>제품 목록</h2>
            <ul>
                {/* map() => {} 형태로 데이터 불러오기    제품명 - ㅇㅇㅇ, 제품가격 - ㅁㅁㅁ */}
                {
                    products.map((product, index) => {
                        return (
                            <li key={index}>제품명 - {product.name}, 제품가격 - {product.price}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Score = ({studentScores}) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {/* 1. 특정리스트를 가져와서 순회하여 표시 ((key, index) =>         (key or index 를 이용해서 랜더링)  ) */}
                {/* 2. 특정리스트를 가져와서 순회하여 표시 ((key)        => {return (key          를 이용해서 랜더링) }) */}
                {/* 3. 특정리스트를 가져와서 순회하여 표시 ((index)      =>         (       index 를 이용해서 랜더링)  ) */}
                {
                    studentScores.map((studentScore, index) => {
                        return (
                            <li key={index}>이름 : {studentScore.name}, 점수 : {studentScore.score}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

const Order = ({cafeOrders}) => {
    return (
        <div>
            <h2>카페 주문 목록</h2>
            <ul>
                {
                    cafeOrders.map((cafeOrder, index) => {
                        // 만일 작성해야하는 javascript 가 존재한다면 JS 작성하는 공간
                        return(
                            <li key={index}>주문명 : {cafeOrder.item}, 수량 : {cafeOrder.quantity}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Book = ({programmingBooks}) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {
                    programmingBooks.map((book, index) => {
                        return (
                            <li key={index}>책이름 : {book.title}, 저자 : {book.author}</li>
                        )
                    })

                }
            </ul>
        </div>
    )
}

const ParentOne = () => {
    // 부모 컴포넌트에서 전달할 데이터 작성

    const userList = [
        {name : "가나다", age : 5},
        {name : "마바사", age : 15},
        {name : "아자차", age : 25}
    ];

    const productList = [
        {name : "노트북", price : 1200000},
        {name : "스마트폰", price : 800000},
        {name : "태블릿", price : 600000}
    ];

    const scoreList = [
        { name: "김영희", score: 95 },
        { name: "이철수", score: 88 },
        { name: "박민준", score: 76 }
    ];

    const orderList = [
        { item: "커피", quantity: 2 },
        { item: "샌드위치", quantity: 1 },
        { item: "케이크", quantity: 3 }
    ];

    const bookList = [
        { title: "자바스크립트 완벽 가이드", author: "David Flanagan" },
        { title: "리액트 프로그래밍", author: "김민수" },
        { title: "모던 프론트엔드 개발", author: "이정환" }
    ];

    return (
        <div>
            {/* 각 데이터 자식 컴포넌트에 각각 전달 */}
            {/* [규칙] 매개변수와 전달인자 명을 맞추는 형식 */}
            <User users={userList} />
            <Product products = {productList} />
            <Score studentScores = {scoreList} />
            <Order cafeOrders = {orderList} />
            <Book programmingBooks = {bookList} />
        </div>
    )

}

/***** 필수 과제 PracticePropArray2.jsx *****/
const MusicPlay = ({songs}) => {

    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {
                    songs.map((song, index) => (
                        // 직접표시 = 삼항연산자 이용해서 null 값을 직접적으로 표시
                        <li key={index}>{song.title ? song.title : "재생 목록이 없습니다."} && {song.artist}</li>
                    ))
                }
            </ul>
        </div>
    );
};

/* [] -> 배열   &&  {} -> 배열 아님
    songs 에서 작성된 목록에서 값을 가져오는 것
    defaultProps 는 부모에게서 특정 값을 가져오지 못할 때를 대비해서 설정
    가져올 데이터가 많을 시 defaultProps 사용할 것
    defaultProps 작성방법
    restController JSON 형식
 */
// 부모에서 상태를 전달할 때는 props.songs 자체가 undefined 상태일 때 적용
// 상태 관리 부모 컴포넌트 이외 외부에 작성했을 경우 불러옴
MusicPlay.defaultProps = {
    songs: [
        {
            title: "재생 목록이 없습니다.",
            artist : "아티스트 미상"
        }
    ]
}

const Todo = ({tasks}) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {
                    tasks.map((todo, index) => {
                        // done = boolean -> true, false 값
                        // true false 는 화면에 보이지 않으므로
                        // 화면에 보여지기 위해서는 값 변환을 해서 넣어줘야 한다.

                        // true false 는 랜더링 안되므로 다른 값으로 변경해야한다.
                        return(
                            <li key={index}>{todo.task ? todo.task : "할 일이 없습니다."}{todo.done ? "✅" : ""}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const TeamMembers = ({members}) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {
                    members.map((member, index) => {
                        // JavaScript 작성 공간
                        /* 들어온 데이터 변경 시
                         ex) 가격을 표시할 떄 DB 에 작성된 가격에 한국기준 ,를 표기하거나 $ 와 같은 설정 */

                        return(
                            <li key={index}>
                                {member.name ? member.name : "등록된 팀원이 없습니다."} && {member.role}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const ShoppingCart = ({cartItems}) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {
                    cartItems.map((cart, index) =>
                        (
                            <li key={index}>
                                {cart.item ? cart.item : "장바구니가 비었습니다"} && {cart.quantity}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

const EventSchedule = ({events}) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {
                    events.map((event, index) => {
                        return (
                            <li key={index}>
                                {event.name ? event.name : "예정된 행사가 없습니다."} && {event.date}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

const ParentTwo = () => {
    // 추후 DB 로 값 전달 받거나 전달할 상태 작성

    // JavaScript 정규식과 같은 코드

    // JavaScript 공간
    // 부모 컴포넌트에서 전달할 데이터
    const songs = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        { artist: "Black Pink" }
    ];

    const tasks = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false }
    ];

    const teamMembers = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" }
    ];

    const cartItems = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    const events = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];

    return (
        <div>
            <MusicPlay songs = {songs}/>
            <Todo tasks = {tasks} />
            <TeamMembers members = {teamMembers} />
            <ShoppingCart cartItems = {cartItems} />
            <EventSchedule events = {events} />
        </div>
    )
}

const PracticePropArray = () => {

    return (
        <div>
            {/*
                배열 형태의 데이터가 들어갈 때
                map 사용
                map 에서 배열 형태의 데이터가 존재하지 않으면 에러 발생
                Can not read Properties of undefined (reading 'map')
                주로 데이터 찾지 못할 때 발생하므로
                defaultProps 작성해줌으로써 에러 방지
                <User />
            */}
            <ParentOne />
            <ParentTwo />

        </div>
    )
}

export default PracticePropArray;