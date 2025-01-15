export default function Container({ children }) {
    return (
        <div className='overflow-y-scroll overflow-x-hidden'>
            <div className='flex justify-center items-center bg-black w-full min-h-screen' >
            {children}
        </div>
        </div>
    )
}