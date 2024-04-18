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
    // Find the index where the value matches in array1
    const indexInArray1 = choices.indexOf(userAnswer);

    // If the value is found in array1
    if (indexInArray1 !== -1) {
        // Get the number from array2 at the index found in array1
        const numberFromArray2 = answers[indexInArray1];

        // Find where the number matches in array3
        const indexInArray3 = answers.indexOf(numberFromArray2);

        // If the number is found in array2
        if (indexInArray3 !== -1) {
            // Add the value to the corresponding index in array3
            colorProfiles[indexInArray3] += 1;
        }
    }
}