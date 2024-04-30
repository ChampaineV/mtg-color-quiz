//Handles logic for scoring and questions is written and other components are imported
import './App.css';
import Quiz from './Quiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Magic The Gathering Color Quiz</h1>
          <p>
          Welcome! This is a Magic The Gathering Color quiz made with HTML, CSS, and JavaScript. Users will be able to answer the following questions that will determine what color is best suited to their play style. Though this may not be 100% accurate, please enjoy!
          </p>
          <a><Quiz /></a>
      </header>
    </div>
  );

  function matchAndAddValue(userAnswer, choices, answers, colorProfiles) {
    // Find the index where the userAnswer matches in choices
    const indexInChoices = choices.indexOf(userAnswer);

    // If the userAnswer is found in choices
    if (indexInChoices !== -1) {
        // Get the corresponding answer value from answers
        const answerValue = answers[indexInChoices];

        // Find the index where the answer value matches in colorProfiles
        const indexInColorProfiles = Object.keys(colorProfiles).indexOf(answerValue);

        // If the answer value is found in colorProfiles
        if (indexInColorProfiles !== -1) {
            // Increment the count for the corresponding color profile
            const color = Object.keys(colorProfiles)[indexInColorProfiles];
            colorProfiles[color]++;
        }
    }
}
}

export default App;
