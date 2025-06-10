import QuizBank from './QuizBank';
import QuizSession from './QuizSession';
import { useState } from 'react';

// Create a new quiz session to track user answers and scores
const session = new QuizSession();

export default function Quiz() {
  // State to track the current question index
  const [activeQuestion, setActiveQuestion] = useState(0);
  // State to track which answer the user has selected
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // State to track if the quiz is finished
  const [finished, setFinished] = useState(false);
  // Get the current question object from QuizBank
  const question = QuizBank.questions[activeQuestion];

  // Handles form submission when the user selects an answer and clicks "Next"
  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === null) return;
    // Record the selected answer in the session
    session.answerQuestion(selectedAnswer);
    // Check if the quiz is finished
    if (session.isFinished()) {
      setFinished(true);
    } else {
      // Move to the next question and reset selected answer
      setActiveQuestion(activeQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  // If the quiz is finished, show the result
  if (finished) {
    return (
      <div className="Quiz">
        <h2>Your color is: {session.getResult()}</h2>
      </div>
    );
  }

  // Render the current question and answer choices
  return (
    <div className="Quiz">
      <header className="Quiz-header">
        <h4>{question.question}</h4>
        <form onSubmit={onSubmit}>
          {question.choices.map((choice, idx) => (
            <div key={idx}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={idx}
                  checked={selectedAnswer === idx}
                  onChange={() => setSelectedAnswer(idx)}
                  required
                />
                {choice}
              </label>
            </div>
          ))}
          <button type="submit" disabled={selectedAnswer === null}>
            Next
          </button>
        </form>
      </header>
    </div>
  );
}