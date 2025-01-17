import { BorderBeam } from '@/components/ui/border-beam';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [isLocked, setIsLocked] = useState({});

  // const options = new Map([
  //   ['A', questions.data],
  //   ['B', 'B'],
  //   ['C', 'C'],
  //   ['D', 'C'],
    
  // ])

  // console.log('test', questions.firstOption)

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3200/questions',
    }).then((result) => {
      setQuestions(result.data.data);
    });
  }, []);

  const handleOptionChange = (questionIndex, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const handleCheck = (questionIndex, correctAnswer) => {
    if (!answers[questionIndex]) {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [questionIndex]: 'Silakan pilih jawaban terlebih dahulu!',
      }));
      return;
    }

    setIsLocked((prevLocked) => ({
      ...prevLocked,
      [questionIndex]: true,
    }));

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [questionIndex]:
        answers[questionIndex] === correctAnswer
          ? 'Jawaban Anda benar!'
          : `Jawaban salah. Jawaban yang benar adalah ${correctAnswer}.`,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen bg-black text-white py-6">
      {questions.map((question, index) => (
        <div key={index} className="bg-[#37176b69] p-6 rounded-lg shadow-lg w-10/12 max-fit-content">
          <div className="flex gap-3">
            <div className="bg-red-600 w-4 h-4 rounded-full"></div>
            <div className="bg-yellow-600 w-4 h-4 rounded-full"></div>
            <div className="bg-green-600 w-4 h-4 rounded-full"></div>
          </div>
          <h2 className="text-xl font-semibold mb-4 mt-5">
            Pertanyaan {index + 1} dari {questions.length}
          </h2>
          <p className="flex flex-col justify-start bg-[#a928e0]-700 p-3 border-solid border-2 border-[#a230d3] text-white">
            Pilihlah salah satu Jawaban dari soal yang diberikan!
          </p>
          <p className="mb-4 mt-5 text-white">{question.question}</p>
          <form>
            <div className="mb-4">
              {['A', 'B', 'C', 'D'].map((option, i) => {
                const optionKey = new Map([
                  ['A', question.firstOption],
                  ['B', question.secondOption],
                  ['C', question.thirdOption],
                  ['D', question.fourthOption],
                ]);
                return (
                  <label key={option} className="block mb-2">
                    <input
                      type="radio"
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      disabled={isLocked[index]}
                      className="mr-2"
                    />
                    {option}. {optionKey.get(option)}
                  </label>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => handleCheck(index, question.correctAnswer)}
              className={`relative flex h-[30px] w-max p-2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ${
                isLocked[index] ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLocked[index]}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-lg font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Check
              </span>
              <BorderBeam size={10} duration={12} delay={9} />
            </button>
          </form>
          {feedback[index] && <p className="mt-4 text-yellow-300">{feedback[index]}</p>}
        </div>
      ))}
    </div>
  );
};

export default Question;
