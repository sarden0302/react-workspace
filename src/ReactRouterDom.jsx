import {BrowserRouter as Router, Routes, Route, Form} from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import CafeList from "./pages/CafeList";
import CafeDetail from "./pages/CafeDetail";
import CafeForm from "./pages/CafeForm";
import Footer from "./layout/Footer";
import RootPath from "./RootPath";


function ReactRouterDom () {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cafes" element={<CafeList />} />
                <Route path="/cafes/:id" element={<CafeDetail />} />
                <Route path="/cafes/add" element={<CafeForm />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default ReactRouterDom;