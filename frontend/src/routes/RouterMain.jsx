import Login from "../pages/auth/Login"
import Question from "../pages/auth/question"
import Questionnaire from "../pages/auth/question"
import Register from "../pages/auth/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function RouterMain() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/register" element={<Register/>} />
                <Route path="/admin/login" element={<Login/>} />
                <Route path="/admin/question" element={<Question/>} />
            </Routes>
        </Router>
    )
}
