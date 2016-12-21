//Create Questions
var questions = [
    new Question("Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson" ], "George Washington"),
    new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["42","Pi"], "Pi")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();