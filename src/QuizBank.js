const QuizBank = {
    totalQuestions: 7,
    colors : [
        green = 0,
        red = 0,
        black = 0,
        blue = 0,
        white = 0
    ],
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

const handleAnswers = (questionIndex, selectedAnswer) => {
    const answersList = [...answers];
    const colorsList = [...colors];
    
    /**updatedAnswers[questionIndex] = selectedAnswer;
    setAnswers(updatedColors);**/
  };