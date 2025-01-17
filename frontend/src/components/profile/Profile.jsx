import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import logout from '../../../utils/logout'

export default function Profile({heading}) {

    const [nama, setNama] = useState(localStorage.getItem('nama'))
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate()

    const updateProfile = (e) => {
        e.preventDefault();  // Mencegah reload halaman saat submit
    
        const requestingData = {
            nip: localStorage.getItem('nip'),
            nama: nama,
            password: password,
            newPassword: newPassword
        };
    
        try {
            axios({
                method: 'PUT',
                url: 'http://localhost:3200/users',
                data: requestingData
            }).then(() => {
                localStorage.clear();  
                alert('Data Berhasil Terupdate!!!');
                navigate('/');  
            });
        } catch (error) {
            console.log('Error:', error);
            alert('Terjadi kesalahan saat memperbarui profil');
        }
    };
    

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="py-5" >
            <div className='flex flex-col bg-container-form w-full h-min p-6 ' >
                <h2 className='ml-2 mb-6 text-[#667694] running-text text-2xl'>{heading}</h2>
                <div className="ml-2 text-[#667694] running-text text-lg">
                    <p>Hello, {localStorage.getItem('nama')}</p>
                    <p>NIP: {localStorage.getItem('nip')}</p>
                </div>
                <div className="flex items-center justify-center gap-3 mt-5" >
                    <hr className="border w-[20%]" />
                    <p  >Update Profile</p>
                    <hr className="border w-[20%]" />
                </div>
                <form>
                    <div className='my-5' >
                        <label className='text-cyan-300' >Your Name*</label>
                        <div className='flex items-center mt-2' >
                            <input onChange={(event) => setNama(event.target.value)} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2' required defaultValue={localStorage.getItem('nama')}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-5" >
                        <div className='my-5' >
                            <label className='text-cyan-300' >Old Password*</label>
                            <div className='flex items-center mt-2' >
                                <input onChange={(event) => setPassword(event.target.value)} type='password' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2' required/>
                            </div>
                        </div>
                        <div className='my-5' >
                            <label className='text-cyan-300' >New Password*</label>
                            <div className='flex items-center mt-2' >
                                <input onChange={(event) => setNewPassword(event.target.value) } type='password' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2' required/>
                            </div>
                        </div>
                    </div>
                        <div className="flex items-center justify-between" >
                            <button type='submit' onClick={updateProfile} className='w-24 h-10 border border-[#a928e0] font-thin px-2 py-1 mt-2 rounded-md' >Submit</button>
                            <button type='button' onClick={() => logout()} className='w-24 h-10 font-thin px-2 py-1 mt-2 rounded-md bg-red-600' >Logout</button>
                        </div>
                </form>
            </div>
        </div>
    )
}
