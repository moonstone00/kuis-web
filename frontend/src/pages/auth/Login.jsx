import { useEffect, useState } from "react"
import { done, arrow } from '../../assets/images'
import Container from "../../components/layout/container"

export default function Login() {

    const [NIP, setNIP] = useState('')
    const [password, setPassword] = useState('')
    const [time, setTime] = useState(false)
    const [icon, setIcon] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('password', password)
    }

    useEffect(() => {
        setTimeout(() => {
            setTime(true)
        }, 800)
    }, [])

    return (
        <Container>
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
                            <div className='my-5' >
                                <label className='text-cyan-300' >Enter Your NIP*</label>
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
                                    <input type='text' value={NIP} onChange={(e) => setNIP(e.target.value)} className='text-white focus:outline-none focus:ring-1 focus:ring-[#0969da] bg-input-transparent w-full h-7 rounded-md py-3 px-2 mr-10' required/>
                                </div>
                            </div>
                        )
                        :
                        null
                    }

                    
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
                                required
                            />
                            <button type='submit' className='w-24 border border-[#a928e0] font-thin px-2 py-1 rounded-md' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Container>
    )
}
