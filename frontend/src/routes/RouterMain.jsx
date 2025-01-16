import Login from "../pages/auth/Login"
import NotFoundPage from "../notfound/notfound"
import Dashboard from "../pages/dashboard/Dashboard"
import Question from "../pages/auth/question"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function RouterMain() {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<Login/>} />
                <Route path="/admin/dashboard" element={<Dashboard/>} />
                <Route path="/admin/question" element={<Question/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </Router>
    )
}