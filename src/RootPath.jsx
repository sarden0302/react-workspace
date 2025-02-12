// ViewController 처럼 주소와 js 를 연결해주는 컨트롤러와 같은 설정
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PizzaList from "./BackendAPI/PizzaList";
import PizzaDetail from "./BackendAPI/PizzaDetail";
// 경로를 설정해주는 js 파일은 function 을 많이 사용

// const RootPath = () => {
function RootPath () {

    return (
        <Routes>
            <Route path="/" element={<PizzaList />} />
            <Route path="/pizzas/detail:id" element={<PizzaDetail />} />
        </Routes>
    )
}

export default RootPath;