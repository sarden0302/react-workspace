
import {useState} from "react";
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import UserHome from "./pages/user/UserHome";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/user/Login";
import Mypage from "./pages/user/Mypage";


function LoginRoute() {
    const [user, setUser] = useState(null);


    return(
        <Router>
            <Routes>
                <Route path="/" element={<UserHome /> } />
                <Route path="/login" element={<Login setUser={setUser}  />  }  />
                <Route path="/mypage" element={<ProtectedRoute>
                    <Mypage user={user} />
                </ProtectedRoute>
                } />
            </Routes>
        </Router>
    )
}

export default LoginRoute;
