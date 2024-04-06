class UI {
    constructor() {
        this.elQuizTitle = document.querySelector("#quizTitle");
        this.elTime = document.querySelector("#time");
        this.elquizAnswers = document.querySelector("#quizAnswers");
        this.elQuizTitle = document.querySelector("#quizTitle");
        this.elCurrent = document.querySelector("#current");
        this.elTotalQuestion = document.querySelector("#totalQuestion");
        this.elNextQuestion = document.querySelector("#nextQuestion");
        this.elStartContent = document.querySelector("#startContent");
        this.elStartBtn = document.querySelector("#startBtn");





    }


    createAnswer(answers) {
        const classList = "border rounded-[5px] border-[#a7a7a7] py-[9px] px-[12px] w-full text-left"
         
        Object.keys(answers).forEach(key => {
            this.elquizAnswers.innerHTML += `<button class="${classList}">
            <b class="font-bold">${key.toUpperCase()}.</b> ${answers[key]}
            </button>`
        })
    }



     createQuiestionTitle(number, text) {
        this.elQuizTitle.innerHTML =  `<b class="font-bold">${number}.</b> ${text}`

     }

     createCurrentAndTotal(currentNumber, total) {
        this.elCurrent.innerHTML = currentNumber;
        this.elTotalQuestion.innerHTML = total;
     }
}








// <button class="border bg-[#D4FFBA] rounded-[5px] border-[#a7a7a7] py-[9px] px-[12px] w-full text-left">
// <b class="font-bold">a.</b> Lorem Ipsum has been the industry's
// </button>
// <button class="border bg-[#FFDEDE] rounded-[5px] border-[#a7a7a7] py-[9px] px-[12px] w-full text-left">
// <b class="font-bold">a.</b> Lorem Ipsum has been the industry's
// </button>




