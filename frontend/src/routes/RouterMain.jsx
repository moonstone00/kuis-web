import NotFoundPage from "../notfound/notfound"
import Login from "../pages/auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function RouterMain() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<Login/>} /> 
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </Router>
    )
}