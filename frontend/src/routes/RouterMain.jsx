import Login from "../pages/auth/Login"
import NotFoundPage from "../components/notfound/notfound"
import Dashboard from "../pages/dashboard/Dashboard"
import Question from "../pages/question/Question"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function RouterMain() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Question/>} />
                <Route path="/admin/login" element={<Login/>} />
                <Route path="/admin/dashboard" element={<Dashboard/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </Router>
    )
}