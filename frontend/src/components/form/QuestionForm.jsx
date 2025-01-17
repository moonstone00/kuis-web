import { useState } from 'react'
import { arrow } from '../../assets/images'
import Container from '../layout/container'
import axios from 'axios'

export default function QuestionForm() {
    const [question, setQuestion] = useState("")
    const [firstOption, setFirstOption] = useState("")
    const [secondOption, setSecondOption] = useState("")
    const [thirdOption, setThirdOption] = useState("")
    const [fourthOption, setFourthOption] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")

    const handleQuestion = (inputQuestion) => {
        setQuestion(inputQuestion)
    }

    const handleFirstOption = (inputFirstOption) => {
        setFirstOption(inputFirstOption)
    }

    const handleSecondOption = (inputSecondOption) => {
        setSecondOption(inputSecondOption)
    }

    const handleThirdOption = (inputThirdOption) => {
        setThirdOption(inputThirdOption)
    }

    const handleFourthOption = (inputFourthOption) => {
        setFourthOption(inputFourthOption)
    }

    const handleCorrectAnswer = (inputCorrectAnswer) => {
        setCorrectAnswer(inputCorrectAnswer)
    }

    const Question = (event) => {
        event.preventDefault()

        const requestingData = {
            question: question,
            firstOption: firstOption,
            secondOption: secondOption,
            thirdOption: thirdOption,
            fourthOption: fourthOption,
            correctAnswer: correctAnswer
        }

        if(question !== "") {
            axios({
                method: 'POST',
                url: 'http://localhost:3200/questions',
                data: requestingData
            }).then(() => {
                alert('Data berhasil ditambahkan!!')
            }).catch(() => {
                alert('Data gagal ditambahkan!!')
            })
        } else {
            alert('data kosong')
        }
    }

    return (
        <Container>
            <div className='ml-2 my-6 text-[#667694] running-text text-lg'>
                <p>Creating a new question...</p>
            </div>

            <form className='ml-2 mt-4' >
                <div className='my-5' >
                    <label className='text-cyan-300' >Enter Your Qestion*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <textarea onChange={(event) => handleQuestion(event.target.value)} rows={4} cols={50} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full min-h-[80px] rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option A*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input onChange={(event) => handleFirstOption(event.target.value)} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option B*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input onChange={(event) => handleSecondOption(event.target.value)} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option C*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input onChange={(event) => handleThirdOption(event.target.value)} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option D*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input onChange={(event) => handleFourthOption(event.target.value)} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='flex items-center justify-start  border-red-900' >
                    <div className='my-5' >
                        <label className='text-cyan-300' >Correct Answer*</label>
                        <div className='flex items-center mt-2' >
                            <img src={arrow} className='w-8 mr-3' />
                            <input onChange={(event) => handleCorrectAnswer(event.target.value)} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-3' required/>
                        </div>
                    </div>
                    <button onClick={Question} type='submit' className='w-24 h-10 border border-[#a928e0] font-thin px-2 py-1 mt-8 rounded-md' >Submit</button>
                </div>
            </form>
        </Container>
    )
}
