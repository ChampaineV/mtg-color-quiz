const QuizBank = {
    totalQuestions: 7,
    _colors: [
        green = 0,
        red = 0,
        black = 0,
        blue = 0,
        white = 0
    ],
    get colors() {
        return this._colors;
    },
    set colors(value) {
        this._colors = value;
    },
    questions : [
    {
        question : 'What do you value most?',
        choices : ['Tradition', 'Freedom', 'Power', 'Self-Growth', 'Duty'],
        answers : ['1', '2', '3', '4', '5']
    },
    {
        question : 'What color do you like best?',
        choices : ['Blue', 'Red', 'White', 'Green', 'Black'],
        answers : ['4', '2', '5', '1', '3']
    }
    ]
}

const handleAnswers = (selectedAnswer) => {
    const answersList = [...choices];
    const colorsList = [...colors];
    const colorLocator = 0;
    for (let x in answersList) {
        if (selectedAnswer == answersList[x])
        {
            colorLocator = x;
        }
    }

    for (let x in colorsList) {
        if (colorLocator == colorsList[x]) {
            colorsList[x].colors();
        }
    }
    /**updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedColors);**/
  };