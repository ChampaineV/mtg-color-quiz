import QuizBank from './QuizBank';
import { useState, useEffect } from 'react';
/*import { useNavigate, Link } from 'react-router-dom';*/

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

    return (
      <div className="Quiz">
        <header className="Quiz-header">
          <h4>{questions[activeQuestion].question}</h4>
          <form onSubmit={onSubmit} className="">
            <button type="submit" className="">
              Next
            </button>
          </form>
        </header>
      </div>*/
    );
  }