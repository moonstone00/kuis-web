export default function Profile({heading}) {
    return (
        <div className="py-5" >
            <div className='flex flex-col bg-container-form w-[350px] h-min p-6 ' >
                <h2 className='ml-2 mb-6 text-[#667694] running-text text-2xl'>{heading}</h2>
                <div className="ml-2 text-[#667694] running-text text-lg">
                    <p>Hello, {localStorage.getItem('nama')}</p>
                    <p>NIP: {localStorage.getItem('nip')}</p>
                </div>
                <form>
                    <div className='my-5' >
                        <label className='text-cyan-300' >Your Name*</label>
                        <div className='flex items-center mt-2' >
                            <input type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2' required defaultValue={localStorage.getItem('nama')}/>
                        </div>
                    </div>
                    <div className="flex items-center gap-5" >
                        <div className='my-5' >
                            <label className='text-cyan-300' >Old Password*</label>
                            <div className='flex items-center mt-2' >
                                <input type='password' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2' required/>
                            </div>
                        </div>
                        <div className='my-5' >
                            <label className='text-cyan-300' >New Password*</label>
                            <div className='flex items-center mt-2' >
                                <input type='password' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2' required/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
