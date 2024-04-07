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
        if(this.questions.length > this.index + 1) {
             this.index += 1;
             this.start()
             ui.toggleNextButton("hidden")
        ui.elQuizAnswers.classList.remove("pointer-events-none");

        }
    }

    start() {
        this.getQuestion()
        ui. createQuiestionTitle(this.index + 1, this.question.text)
        ui.createAnswer(this.question.answers)
        ui.createCurrentAndTotal(this.index +1, this.questions.length)
        ui.startTime(10) 
    }

   
}

const quiz = new Quiz(questions)


ui.elNextQuestion.addEventListener("click", () => {
    quiz.nextQuestion()
})

ui.elQuizAnswers.addEventListener("click", (e) => {
    const object = e.target;
    if(object.matches("button")) {
        const value = object.value;
        let corrent = quiz.question.correct;


        ui.elQuizAnswers.classList.add("pointer-events-none");
        if(quiz.index < quiz.questions.length -1)
        ui.toggleNextButton("show")
        ui.stopTIme()

        if(corrent === value) {
            object.classList.add("bg-[#D4FFBA]")
        }
        else {
            object.classList.add("bg-[#FFDEDE]")
            ui.elQuizAnswers.querySelector(`button[value="${corrent}"]`).classList.add("bg-[#D4FFBA]")
    } 
}
})



quiz.start()

