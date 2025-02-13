// ViewController 처럼 주소와 js 를 연결해주는 컨트롤러와 같은 설정
import {BrowserRouter as Router, Routes, Route, Form} from "react-router-dom";
import PizzaList from "./BackendAPI/PizzaList";
import PizzaDetail from "./BackendAPI/PizzaDetail";
import PizzaForm from "./BackendAPI/PizzaForm";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
// 경로를 설정해주는 js 파일은 function 을 많이 사용

// const RootPath = () => {

// Switch -> Route 명칭 변환 도입
// react 에서 작성하는 경로는 view Controller 와 관계없음
// Springboot resource 밑에 작성한 css / js / html 파일은 더이상 의미가 없음
// 위 역할을 react 에서 모두 할 것이기 때문
function RootPath () {
    /* props
        추후 axios 나 login session 상태 관리 작성
    */
    return (
        <Router>
            {/* view controller 역할
                경로 (url, api)를 설정하여 위치에 따른 html 호출을 요청할 경우
                BrowserRouter as Router 를
                1. index.js 내부에서 모든 JavaScript 를 감싸주거나
                index.js 에서 감싸지 않길 원한다면
               2. index.js 나 index.js 내부에 작성된 단일 자바 스크립트 내에
               최초 1회 작성하여 Component 들을 모두 감싸줍니다.

               현재는 2번 방식 사용
               RootPath 와 같이 사용할 수 있음
            */}
            <Header  />
            {/*
                React 경로로 표기하는 Component 와 경로설정을 하지 않은 Component 구분이 필요
                경로 설정이 필요한 Component 의 경우 Routes 내부에 작성
                경로 작성없이 호출만 원할 경우 Routes 외부에 작성

                Routes 외부에 작성하는 대표적인 예제 Component
                Header 와 Footer
             */}
            <Routes>
                {/* Route = 경로설정  path = api url 경로 작성   element{<경로에 따라 랜더링할 js파일명칭/>}
                    추후에 <Link> 태그 내부에 <Link to=""> 로 작성하여 <Route path="" 로 지정한 경로를 to 내부에 작성해준다.
                    path && to 경로 동일해야한다

                    ※ 주의!
                        상세보기와 같이 주소 값이 유동적으로 params 를 받을 경우
                        path 에서는 -> : params
                        to   에서는 -> ${params}
                        & 로 params 여러가지 작성
                */}
                <Route path="/" element={<PizzaList />} />
                <Route path="/pizzas/detail/:id" element={<PizzaDetail />} />
                <Route path="/pizza/add" element={<PizzaForm />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RootPath;