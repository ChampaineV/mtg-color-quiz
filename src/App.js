//Handles logic for scoring and questions is written and other components are imported
import './App.css';
import Quiz from './Quiz';
import { useState } from 'react';

function App() {
  // State to track if the user has started the quiz
  const [started, setStarted] = useState(false);

  // Show welcome screen with Next button, then show Quiz when started
  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic The Gathering Color Quiz</h1>
        <p>
          Welcome! This is a Magic The Gathering Color quiz made with HTML, CSS, and JavaScript. Users will be able to answer the following questions that will determine what color is best suited to their play style. Though this may not be 100% accurate, please enjoy!
        </p>
        {!started ? (
          <button onClick={() => setStarted(true)}>
            Next
          </button>
        ) : (
          <Quiz />
        )}
      </header>
    </div>
  );
}

export default App;
