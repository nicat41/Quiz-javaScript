let  counter;
class UI {
    constructor() {
        this.elQuizTitle = document.querySelector("#quizTitle");
        this.elTime = document.querySelector("#time");
        this.elQuizAnswers = document.querySelector("#quizAnswers");
        this.elQuizTitle = document.querySelector("#quizTitle");
        this.elCurrent = document.querySelector("#current");
        this.elTotalQuestion = document.querySelector("#totalQuestion");
        this.elNextQuestion = document.querySelector("#nextQuestion");
        this.elStartContent = document.querySelector("#startContent");
        this.elStartBtn = document.querySelector("#startBtn");
        this.elTimeLine = document.querySelector("#timeLine");

    }

 
    createAnswer(answers) {
        const classList = "border rounded-[5px] border-[#a7a7a7] py-[9px] px-[12px] w-full text-left"

        this.elQuizAnswers.innerHTML = '';
        Object.keys(answers).forEach(key => {
            this.elQuizAnswers.innerHTML += `<button class="${classList}" value="${key}">
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

     toggleNextButton (type) {
        if(type === "show") {
            this.elNextQuestion.classList.remove("hidden")
        }
        else {
            this.elNextQuestion.classList.add("hidden")
        }
     }

     startTime(value) {
       const  obj = this;
         counter = setInterval(updateTime, 1000) 

        function updateTime () {
            obj.elTime.innerHTML = value
          value--;

          if(value < 0) {
            obj.stopTIme()
          }
        }

    }
    stopTIme() {
        clearInterval(counter)

    }
}
