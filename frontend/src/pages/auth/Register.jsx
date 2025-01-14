import { useEffect, useState } from "react"
import { done, arrow } from '../../assets/images'

export default function Register() {

    const [continueEmail, setContinueEmail] = useState(false)
    const [continueUsername, setContinueUsername] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [time, setTime] = useState(false)
    const [icon, setIcon] = useState(false)
    const [iconUsername, setIconUsername] = useState(false)

    const handleContinueEmail = (event) => {
        event.preventDefault()
        const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(emailRegex.test(email)) {
            setIsEmailValid(true)
            setContinueEmail(true)
            setIcon(true)
        } else {
            setIsEmailValid(false)
            setContinueEmail(false)
        }
    }

    const handleContinueUsername = (event) => {
        event.preventDefault()
        setContinueUsername(true)
        setIconUsername(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)

        if(!continueEmail) {
            handleContinueEmail(event)
        } else if(!continueUsername) {
            handleContinueUsername(event)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setTime(true)
        }, 800)
    }, [])

    return (
        <div className='overflow-y-scroll overflow-x-hidden'>
            <div className='flex justify-center items-center bg-black w-full min-h-screen' >
                <div className='flex flex-col bg-container-form w-[600px] h-min p-6 ' >
                    <div className='flex gap-3'>
                        <div className='bg-red-600 w-4 h-4 rounded-full' ></div>
                        <div className='bg-yellow-600 w-4 h-4 rounded-full' ></div>
                        <div className='bg-green-600 w-4 h-4 rounded-full' ></div>
                    </div>

                    <div className='ml-2 my-6 text-[#667694] running-text text-lg'>
                        <p>Creating a new account</p>
                    </div>

                    <form className='z-[500] ml-2 mt-4' onSubmit={handleSubmit}>
                        {
                            time ? 
                            (
                                <div>
                                    <label className='text-cyan-300' >Enter Your Email*</label>
                                    <div className='flex items-center mt-2' >

                                        {
                                            icon ?
                                            (
                                                <img src={done} className='w-4 mr-3' />
                                            )
                                            :
                                            (
                                                <img src={arrow} className='w-8 mr-3' />
                                            )
                                        }
                                        <input
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='text-white focus:outline-none focus:ring-1 focus:ring-[#0969da] bg-input-transparent w-full h-7 rounded-md py-3 px-2 mr-10'
                                        />
                                        <button type='click' className='w-24 border border-[#a928e0] font-thin px-2 py-1 rounded-md' >Continue</button>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }

                        {
                            continueEmail && isEmailValid ?
                            (
                                <div className='my-5' >
                                    <label className='text-cyan-300' >Enter Your Username*</label>
                                    <div className='flex items-center mt-2' >
                                        {
                                            iconUsername ?
                                            (
                                                <img src={done} className='w-4 mr-3' />
                                            )
                                            :
                                            (
                                                <img src={arrow} className='w-8 mr-3' />

                                            )
                                        }
                                        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='text-white focus:outline-none focus:ring-1 focus:ring-[#0969da] bg-input-transparent w-full h-7 rounded-md py-3 px-2 mr-10'/>
                                        <button type='submit' className=' w-24 border border-[#a928e0] font-thin px-2 py-1 rounded-md' >Continue</button>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }

                        {
                            continueUsername ? 
                            (
                                <div className='my-5' >
                                    <label className='text-cyan-300' >Enter Your Password*</label>
                                    <div className='flex items-center mt-2' >
                                        <img src={arrow} className='w-8 mr-3' />
                                        <input type='password'
                                        style={{
                                            '-ms-reveal': 'none',
                                            '-webkit-reveal': 'none',
                                            'appearance': 'none',
                                            '-webkit-appearance': 'none' }}
                                        // value={password}
                                        className='text-white focus:outline-none focus:ring-1 focus:ring-[#0969da] bg-input-transparent w-full h-7 rounded-md py-3 px-2 mr-10'
                                        />
                                        <button type='submit' className='w-24 border border-[#a928e0] font-thin px-2 py-1 rounded-md' >Submit</button>
                                    </div>
                                </div>
                            )
                            :
                            null
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
