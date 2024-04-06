const ui = new UI();

class Quiz {
    constructor (questions) {
        this.index = 0;
        this.questions = questions;
        this.getQuestion()
    }

    getQuestion () {
        this.question = this.questions[this.index]

    }

    nextQuestion () {
        if(this.questions.length > this.index+1) {
             this.index += 1;
             this.start()
        }
    }

    start() {
        this.getQuestion()
        ui. createQuiestionTitle(this.index + 1, this.question.text)
        ui.createAnswer(this.question.answers)
        ui.createCurrentAndTotal(this.index +1, this.questions.length)
    }

   
}

const quiz = new Quiz(questions)


ui.elNextQuestion.addEventListener("click", () => {
    quiz.nextQuestion()
})



quiz.start()

