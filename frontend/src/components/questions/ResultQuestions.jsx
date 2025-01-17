import {useEffect, useState} from 'react'
import axios from "axios";


export default function ResultQuestions({heading}) {
    const [soal, setSoal] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3200/questions",
        }).then((result) => {
            setSoal(result.data.data);
            console.log(result.data.data);
        });
    }, [])

    const handleChange = (check, index) => {
        const correctAnswer = soal[index]?.correctAnswer;
        if (check === correctAnswer) {
            console.log(`Jawaban benar untuk soal ${index + 1}`);
        } else {
            console.log(`Jawaban salah untuk soal ${index + 1}`);
        }
    };
    
    const handleDelete = async (id) => {
        try {
            const confirmDelete = window.confirm("Are you sure you want to delete this question?");
            if (!confirmDelete) return;
      
            await axios.delete(`http://localhost:3200/questions/${id}`);
            setSoal((prevSoal) => prevSoal.filter((soall) => soall.id !== id));
            alert("Question deleted successfully");
        } catch (error) {
            console.error("Error deleting question:", error);
            alert("Failed to delete question");
        }
    };
    return (
        <div className='bg-container-form overflow-y-scroll h-[333px] terminal-scroll-bar' >
                <div className='flex flex-col w-full p-6 '>
                    <h2 className='ml-2 text-[#667694]  text-2xl font-semibold' >{heading}</h2>
                {soal.map((soall, index) => {
                    return (
                        <div key={soall.id} className="p-4 mb-4">
                            <p><span className='text-2xl' >{index + 1}</span>. {soall.question}</p>
                            <div className="flex flex-col items-start gap-.5 ml-5">
                                <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name={index}
                                    value="A"
                                    onChange={(event) => handleChange(event.target.value, index)}
                                />
                                <label className={`${soall.correctAnswer === 'A' ? 'text-red-900' : ''}`} ><span className='text-lg' >A.</span> {soall.firstOption}</label>
                                </div>
                                <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name={index}
                                    value="B"
                                    onChange={(event) => handleChange(event.target.value, index)}
                                />
                                <label className={`${soall.correctAnswer === 'B' ? 'text-red-900' : ''}`}><span className='text-lg' >B.</span> {soall.secondOption}</label>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-.5 ml-5">
                                <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name={index}
                                    value="C"
                                    onChange={(event) => handleChange(event.target.value, index)}
                                />
                                <label className={`${soall.correctAnswer === 'C' ? 'text-red-900' : ''}`}><span className='text-lg' >C.</span> {soall.thirdOption}</label>
                                </div>
                                <div className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    name={index}
                                    value="D"
                                    onChange={(event) => handleChange(event.target.value, index)}
                                />
                                <label className={`${soall.correctAnswer === 'D' ? 'text-red-900' : ''}`}><span className='text-lg' >D.</span> {soall.fourthOption}</label>
                                </div>
                            </div>
                            <button
                                onClick={() => handleDelete(soall.id)}
                                className="rounded-lg bg-red-500 text-white px-4 py-2 mt-4"
                            >
                                Delete Question
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
