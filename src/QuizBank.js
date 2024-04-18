const QuizBank = {
    totalQuestions: 7,
    _colors: [
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