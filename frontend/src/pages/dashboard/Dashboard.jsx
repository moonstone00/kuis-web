import Profile from "../../components/profile/Profile";
import QuestionForm from "../../components/form/QuestionForm";
import ResultQuestions from "../../components/questions/ResultQuestions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
        navigate("/admin/login");
        }
    }, []);

    return (
        <section className="w-full bg-black">
            <div className="flex justify-center gap-8">
                <QuestionForm />
                <div>
                    <Profile heading={"Dashboard"} />
                    <ResultQuestions heading={"All Question"} />
                </div>
            </div>
        </section>
    );
}
