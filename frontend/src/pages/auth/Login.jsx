import axios from 'axios'
import Container from "../../components/layout/container"
import { useNavigate } from "react-router-dom"
import { done, arrow } from '../../assets/images'
import { useEffect, useState } from "react"
import { Meteors } from "@/components/ui/meteors";


export default function Login() {

    const [NIP, setNIP] = useState('')
    const [password, setPassword] = useState('')
    const [time, setTime] = useState(false)
    const [icon, setIcon] = useState(false)
    const navigate = useNavigate()

    const handleNIP = (inputNIP) => {
        setNIP(inputNIP)
    }

    const handlePassword = (inputPassword) => {
        setPassword(inputPassword)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const requestingData = {
            nip: NIP,
            password: password
        }

        axios({
            method: 'POST',
            url: 'http://localhost:3200/users/login',
            data: requestingData
        }).then((result) => {
            localStorage.setItem('nip', result.data.data.nip)
            localStorage.setItem('nama', result.data.data.nama)
            navigate('/admin/dashboard')
        }).catch(err => {
            alert('NIP atau Password Salah!!!')
        })
    }

    useEffect(() => {
        if(localStorage.getItem('nama') && localStorage.getItem('nip')) {
            navigate('/admin/dashboard')
        }
        setTimeout(() => {
            setTime(true)
        }, 800)
    }, [])

    return (
        <section className='bg-black flex items-center justify-center w-full min-h-screen border' >
                  <Meteors number={30} />

            <Container>
                    <div className='ml-2 my-6 text-[#667694] running-text text-lg'>
                        <p>Creating a new account</p>
                    </div>

                    <form className='ml-2 mt-4' onSubmit={handleSubmit}>
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
                                        <input type='text' value={NIP} onChange={(event) => handleNIP(event.target.value)} className='text-white focus:outline-none focus:ring-1 focus:ring-[#0969da] bg-input-transparent w-full h-7 rounded-md py-3 px-2 mr-10' required/>
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
                                    value={password}
                                    onChange={(event) => handlePassword(event.target.value)}
                                    className='text-white focus:outline-none focus:ring-1 focus:ring-[#0969da] bg-input-transparent w-full h-7 rounded-md py-3 px-2 mr-10'
                                    required
                                />
                                <button type='submit' className='w-24 border border-[#a928e0] font-thin px-2 py-1 rounded-md' >Submit</button>
                            </div>
                        </div>
                    </form>
            </Container>
        </section>
    )
}
