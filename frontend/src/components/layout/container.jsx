export default function Container({ children, title }) {
    return (
        <div className='overflow-y-scroll overflow-x-hidden'>
            <div className='flex justify-center items-center bg-black w-full min-h-screen' >
                <div className='flex flex-col bg-container-form w-[600px] h-min p-6 ' >
                    <div className='flex gap-3'>
                        <div className='bg-red-600 w-4 h-4 rounded-full' ></div>
                        <div className='bg-yellow-600 w-4 h-4 rounded-full' ></div>
                        <div className='bg-green-600 w-4 h-4 rounded-full' ></div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}