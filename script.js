const ui = new UI();

class Quiz {
    constructor (questions) {
        this.index = 0;
        this.questions = questions;
        this.question = this.questions[this.index]
    }

    nextQuestion () {
        this.index += 0;

    }

    start() {
        ui. createQuiestionTitle(this.index +1, this.question.text)
        ui.createAnswer(this.question.answers)
    }

   
}

const quiz = new Quiz(questions)

// console.log(quiz)

quiz.start()

