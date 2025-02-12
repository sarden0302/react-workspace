import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const PizzaList = () => {

    // 배열로 초기화 가능
    const [pizzas, setPizzas] = useState([]);

    /* () => {}
        소괄호나 중괄호 내부에 들어갈 변수이름이나 기능이 하나만 존재한다면
            -> 괄호 생략 가능
        But, 변수이름이나 기능이 두가지 이상 존재한다면
            -> 괄호 필수 작성

        ex)
            useEffect(() => {}, [])
            useEffect((event) => {alert("안녕")}, [])    -> 걍 이렇게 작성하셈!
            useEffect(event => {}, [])                  -> 소괄호 생략
            useEffect(() => alert("안녕"), [])           -> 중괄호 생략
            useEffect(event => alert("안녕"), [])        -> 소, 중괄호 생략

            매개변수 2개, 함수내 실행 기능 2개 이상일 시 생략 불가
            useEffect((event, xyz) => {
                alert("안녕");
                setPizzas([]);
            }, [])

            .then(() => {})
            .then((res) => {setPizzas(res.data)})
            .then(res => {setPizzas(res.data)})         -> 소괄호 생략
            .then((res) => setPizzas(res.data))         -> 중괄호 생략
            .then(res => setPizzas(res.data))           -> 소, 중괄호 생략

            매개변수 2개, 함수내 실행 기능 2개 이상일 시 생략 불가
            .then((res, rep) => {
                setPizzas(res.data)
                alert("데이터를 성공적으로 호출했습니다.");

            })
     */

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/pizzamenu")
            .then(  // 8080/api/pizzas 에서 데이터 가져오길 성공했다면
                (res) => {  // res = response = 응답
                    setPizzas(res.data);    // res.data = get 으로 전달받은 데이터를 -> setPizzas 에 리스트로 저장
                })
            .catch(() => {
                alert("백엔드에서 데이터 가져오기를 실패했습니다.");
            });
    }, []);
    // 최초 실행

    return (
        <div>
            <h2>🍕 피자 메뉴</h2>
            {/* <ul><li> 태그를 <div> <div> 태그로 변경해서 설정
                map() 형식을 map({}) 중괄호 형식으로 변환
            */}
            <ul>
                {/* axios 로 가져온 피자 목록 map 으로 전달받아 보여주기 */}
                {
                    pizzas.map((pizza) => (
                        // <li key={index}>     -> index 는 0번 부터 시작
                        <li key={pizza.id}> {/* -> index */}
                            <h3>{pizza.name}</h3>
                            <p>가격 : {pizza.price} 원</p>
                            <p>{pizza.description}</p>
                        </li>
                    ))
                }
            </ul>
            <div>
                {
                    pizzas.map((pizza) =>
                    // pizzas 데이터를 가져와서 특정 설정을 진행할 때 작성
                    {
                        return (
                            // <li key={index}>     -> index 는 0번 부터 시작
                            <div key={pizza.id}> {/* -> index */}
                                <h3>{pizza.name}</h3>
                                <p>가격 : {pizza.price} 원</p>
                                <p>{pizza.description}</p>
                                {/* react 는 a 태그 대신에 Link 태그를 이용하여 경로 설정할 수 있다. */}
                                {/* 경로 이동의 경우
                                    react-router-dom 을 설치하여 Link 를 사용할 수 있다.
                                 */}
                                <Link to={`/pizzas/detail/${pizza.id}`}>
                                    <button>상세보기</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PizzaList;