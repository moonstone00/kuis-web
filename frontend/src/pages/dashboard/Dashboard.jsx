import QuestionForm from "../../components/form/QuestionForm";
import Profile from "../../components/profile/Profile";

export default function Dashboard() {
    return (
        <section className="w-full flex justify-center gap-8 bg-black" >
            <QuestionForm/>
            <Profile 
                heading={'Dashboard'}
            />
        </section>
    )
}