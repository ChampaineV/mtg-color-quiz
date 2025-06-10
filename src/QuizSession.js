import QuizBank from './QuizBank';

class QuizSession {
    constructor() {
        // Copy the color scores array so each session is independent
        this.colorScores = Array(QuizBank.colorNames.length).fill(0);
        this.currentQuestion = 0;
        this.totalQuestions = QuizBank.totalQuestions;
    }

    // Record an answer (choiceIndex is the index of the selected choice)
    answerQuestion(choiceIndex) {
        const question = QuizBank.questions[this.currentQuestion];
        if (!question) return;

        // Get the color index from the answers array
        const colorIndex = question.answers[choiceIndex];
        if (colorIndex >= 0 && colorIndex < this.colorScores.length) {
            this.colorScores[colorIndex]++;
        }
        this.currentQuestion++;
    }

    // Check if quiz is finished
    isFinished() {
        return this.currentQuestion >= QuizBank.questions.length;
    }

    // Get the color with the highest score
    getResult() {
        const maxScore = Math.max(...this.colorScores);
        const resultIndex = this.colorScores.indexOf(maxScore);
        return QuizBank.colorNames[resultIndex];
    }
}

export default QuizSession;