import React, { useState } from 'react';
import Container from '../../components/layout/container';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black text-white'>
      <div className='bg-[#37176b69] p-6 rounded-lg shadow-lg w-10/12 max-fit-content'>
        <div className='flex gap-3'>
          <div className='bg-red-600 w-4 h-4 rounded-full'></div>
          <div className='bg-yellow-600 w-4 h-4 rounded-full'></div>
          <div className='bg-green-600 w-4 h-4 rounded-full'></div>
        </div>
        <h2 className='text-xl font-semibold mb-4 mt-5'>Pertanyaan 1 dari 10</h2>
        <p className='flex flex-col justify-start bg-[#a928e0]-700 p-3 border-solid border-2 border-[#a230d3] text-white'>
          Pilihlah salah satu Jawaban dari soal yang diberikan!
        </p>
        <p className='mb-4 mt-5 text-white'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel odit maiores praesentium quibusdam voluptas.
          Voluptate laudantium, unde maxime ut ipsam iste sit doloremque blanditiis minus ea, repellat, omnis assumenda? Enim!
        </p>
        <form>
          <div className='mb-4'>
            <label className='block mb-2'>
              <input
                type='radio'
                value='none'
                checked={selectedOption === 'none'}
                onChange={handleOptionChange}
                className='mr-2'
              />
              A. Apakah ini?
            </label>
            <label className='block mb-2'>
              <input
                type='radio'
                value='some'
                checked={selectedOption === 'some'}
                onChange={handleOptionChange}
                className='mr-2'
              />
              B. Test Jawaban
            </label>
            <label className='block mb-2'>
              <input
                type='radio'
                value='most'
                checked={selectedOption === 'most'}
                onChange={handleOptionChange}
                className='mr-2'
              />
              C. Ini juga testing
            </label>
            <label className='block mb-2'>
              <input
                type='radio'
                value='all'
                checked={selectedOption === 'all'}
                onChange={handleOptionChange}
                className='mr-2'
              />
              D. Semua benar
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;