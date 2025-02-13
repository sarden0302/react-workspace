import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const PizzaDetail = () => {
    const {id} = useParams();   // URL 에서 ID 값 가져오기
    // ajax 에서 URLSearchParams 와 같은 역할
    const [pizza, setPizza] = useState(null);
    const [pizzaPrice, setPizzaPrice] = useState(null);
    const [pizzaDescription, setPizzaDescription] = useState(null);

    // 현재 위치를 기반으로 하여 앞으로 가기 || 뒤로 가기 기능
    /*
    hook

    useHistory() 명칭으로 동작 -> useNavigate() 명칭으로 도입

    useNavigate() React Router 에서 제공하는 페이지 이동 함수

    navigate(-1) : 뒤로 가기
    navigate(1) : 앞으로 가기
    navigate("/") : 홈으로 이동
    navigate("경로설정") : Link 대신 위치 이동
    -> window.location.href 동일한 기능

     */
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    // axios get 을 이용해서 상세정보 데이터 호출
    // SpringBoot @RequestMapping("/api") 참조해서
    useEffect(() => {
        axios
            .get(`/api/pizza/${id}`)
            .then(
                (res) => {
                    setPizza(res.data);
                    setPizzaPrice(res.data.price);
                    setPizzaDescription(res.data.description);
                }
            )
            .catch(
                (error) => {
                    console.log("pizza detail error : " + error);
                }
            )
    }, []);

    return (
        <>
            {
                /*
                    props
                    useEffect 로 피자 데이터를 불러오는 속도보다 PizzaDetail.js 로딩이 빠르게 진행된다면
                    삼항 연산자 방식을 통해 설정

                    pizza 라는 데이터가 ? 존재한다면 : 존재하지 않는다면
                    pizza 라는 데이터가 ? (<>존재시 랜더링할 html</>) : (<>존재하지 않을 경우 or 데이터 가져오는 상태일 시 보여질 html</>)
                    -> 방법 => 미리 데이터를 불러놓는다
                 */
                pizza ? (
                    <>
                        <h1>{pizza.name}피자 상세보기</h1>
                        <p>가격 : {pizza.price} 원</p>
                        <p>피자 설명 상세보기 : {pizza.description}</p>
                        <button onClick={backBtn}>뒤로 가기</button>
                        <button onClick={backBtn}>뒤로 가기</button>
                        <Link to={"/pizza/add"}>메뉴 추가하기</Link>
                        <Link to={"/pizza/add"}>
                            <button>메뉴 추가하기</button>
                        </Link>
                    </>
                ) :
                (
                    <>
                        <p>로딩 중...</p>
                    </>
                )
            }
        </>
    )
}

const PizzaDetailOptionalChaining = () => {
    const {id} = useParams();   // URL 에서 ID 값 가져오기
    // ajax 에서 URLSearchParams 와 같은 역할
    const [pizza, setPizza] = useState(null);
    const [pizzaPrice, setPizzaPrice] = useState(null);
    const [pizzaDescription, setPizzaDescription] = useState(null);

    // 현재 위치를 기반으로 하여 앞으로 가기 || 뒤로 가기 기능
    /*
    hook

    useHistory() 명칭으로 동작 -> useNavigate() 명칭으로 도입

    useNavigate() React Router 에서 제공하는 페이지 이동 함수

    navigate(-1) : 뒤로 가기
    navigate(1) : 앞으로 가기
    navigate("/") : 홈으로 이동
    navigate("경로설정") : Link 대신 위치 이동
    -> window.location.href 동일한 기능

     */
    const navigate = useNavigate();

    const backBtn = () => {
        navigate(-1);
    }

    // axios get 을 이용해서 상세정보 데이터 호출
    // SpringBoot @RequestMapping("/api") 참조해서
    useEffect(() => {
        axios
            .get(`/api/pizza/${id}`)
            .then(
                (res) => {
                    setPizza(res.data);
                    setPizzaPrice(res.data.price);
                    setPizzaDescription(res.data.description);
                }
            )
            .catch(
                (error) => {
                    console.log("pizza detail error : " + error);
                }
            )
    }, []);

    return (
        <>
            <h1>{pizza?.name}피자 상세보기</h1>
            <p>가격 : {pizza?.price} 원</p>
            <p>피자 설명 상세보기 : {pizza?.description}</p>
            {/*
                ?. -> optional chain
                pizza.name 과 pizza?.name 의 차이
                useEffect 로 데이터를 가져오는 속도와 페이지 보여지는 속도 차이
                pizza 의 초기값은 null 인 상태 -> null 인 상태를 보통 로딩중 표기

                왼쪽 값이 null 또는 undefined 라면 에러를 발생시키지 않고 undefined 로 표기
            */}
            <button onClick={backBtn}>뒤로 가기</button>
        </>
    )
}

export default PizzaDetail;