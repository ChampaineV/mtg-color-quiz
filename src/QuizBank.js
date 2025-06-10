const colorNames = ['Green', 'Red', 'Black', 'Blue', 'White'];

const QuizBank = {
    totalQuestions: 4,
    colorNames, // Export color names for use in results
    questions : [
    {
        question : 'What color do you like best?',
        choices : ['Blue', 'Red', 'White', 'Green', 'Black'],
        answers : [3, 1, 4, 0, 2]
    },
    {
        question : 'What do you desire most?',
        choices : ['Power', 'Freedom', 'Perfection', 'Peace', 'Acceptance.'],
        answers : [2, 1, 3, 4, 0]
    },
    {
        question : 'In a group project, what role do you play?',
        choices : ['I am a Leader. I make sure my team has a clear objective and have a good sense of when a problem is solved', 'I am a Doer. I know where to go to find information and I am proactive about doing so', 'I am a Challenger. I can look at problems and see more than one solution to drive effectiveness.', 'I am a Thinker. I share ideas and break down information for the best solution.', 'I am a Supporter. I want to make sure everyone in my team is heard.'],
        answers : [0, 1, 2, 3, 4]
    },
    {
        question : 'What do you dislike the most?',
        choices : ['I hate when others are selfish/reckless', 'I hate when plans change abruptly', 'I hate seeing people with a \'savior\' complex', 'I cannot stand being bored/frustrated', 'I hate when people can\'t move away from tradition'],
        answers : [4, 0, 2, 1, 3]
    },
    {
        question : 'What trait are you best known for?',
        choices : ['My kindness', 'My intellect', 'My wisdom', 'My humor', 'My persistence'],
        answers : [4, 3, 0, 1, 2]
    }/*,
    {
        question : 'What is your favorite food?',
        choices : ['Pizza', 'Burger', 'Sushi', 'Salad', 'Pasta'],
        answers : [1, 2, 4, 0, 3]
    },
    {
        question : 'What is your favorite season?',
        choices : ['Spring', 'Summer', 'Fall', 'Winter', 'Monsoon'],
        answers : [0, 1, 2, 3, 4]
    }*/
    ]
}