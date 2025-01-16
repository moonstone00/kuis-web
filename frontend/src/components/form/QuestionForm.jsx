import { arrow } from '../../assets/images'
import Container from '../layout/container'

export default function QuestionForm() {
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
                        <textarea rows={4} cols={50} type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full min-h-[80px] rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option 1*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option 2*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option 3*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
                <div className='my-5' >
                    <label className='text-cyan-300' >Option 4*</label>
                    <div className='flex items-center mt-2' >
                        <img src={arrow} className='w-8 mr-3' />
                        <input type='text' className='terminal-scroll-bar text-white focus:outline-none border border-[#0969da] bg-input-transparent w-full h-10 rounded-md py-3 px-2 mr-10' required/>
                    </div>
                </div>
            </form>
        </Container>
    )
}
