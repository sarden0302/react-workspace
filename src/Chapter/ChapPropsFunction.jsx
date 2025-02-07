const ChapPropsFunction = () => {
    return(
        <div>
            <Parent />
        </div>
    )
}

const Child = ({sending}) => {
    return (
        <div>
            <button onClick={sending}>부모에게 받은 기능</button>
        </div>
    )
}

//
const ChildName = ({이름, sending}) => {
    return (
        <div>
            <h3>{이름}</h3>
            <button onClick={sending}>부모에게 받은 기능</button>
        </div>
    )
}

// 기능
const Parent = () => {
     const clickHandle = () => {
         alert("Click button is clicked");
     }

    return (
        <div>
            <h1>부모 -> 자식 함수 전달</h1>
            <Child sending={clickHandle} />
            <ChildName 이름="홍길동" sending={clickHandle} />
        </div>
    )
}

export default ChapPropsFunction;